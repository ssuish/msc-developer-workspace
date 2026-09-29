import { readFileSync, writeFileSync } from "node:fs";

const [issuesPath, outputPath] = process.argv.slice(2);
if (!issuesPath || !outputPath) {
  console.error("Usage: node scripts/build-showcase.mjs ISSUES_JSON OUTPUT_JSON");
  process.exit(1);
}

const pages = JSON.parse(readFileSync(issuesPath, "utf8"));
if (!Array.isArray(pages)) throw new Error("Expected an array of issue pages");
const issues = pages.flat();

function field(body, heading) {
  const section = body.split(/^### /m).find((part) => part.startsWith(heading + "\n"));
  return section ? section.slice(heading.length).trim() : "";
}

function entryFromIssue(issue) {
  if (issue.state !== "open" || issue.pull_request) return null;
  if (!issue.labels?.some((label) => (typeof label === "string" ? label : label.name) === "showcase-submission")) return null;

  const body = String(issue.body ?? "").replace(/\r\n/g, "\n");
  const username = field(body, "GitHub username");
  const rawUrl = field(body, "Live GitHub Pages URL");
  const consent = field(body, "Public showcase consent");
  if (!/^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(username)) return null;
  if (issue.user?.login?.toLowerCase() !== username.toLowerCase()) return null;
  if (!/^- \[[xX]\] I agree to have my GitHub username and portfolio link shown publicly in the MSC Developer Showcase\.$/m.test(consent)) return null;

  let url;
  try {
    url = new URL(rawUrl);
  } catch {
    return null;
  }
  if (url.protocol !== "https:" || url.hostname !== username.toLowerCase() + ".github.io" || url.username || url.password || url.port || url.search || url.hash) return null;

  return {
    username: issue.user.login,
    deployedUrl: url.href,
  };
}

const entries = issues
  .map(entryFromIssue)
  .filter(Boolean)
  .sort((a, b) => a.username.localeCompare(b.username, "en"));
writeFileSync(outputPath, JSON.stringify(entries, null, 2) + "\n");
console.log("Wrote " + entries.length + " showcase entries");
