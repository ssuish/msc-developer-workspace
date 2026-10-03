# Build your Windows developer workspace with WSL

WSL (Windows Subsystem for Linux) runs a Linux environment inside Windows. **This is the recommended Windows path for the workshop.** You will use Ubuntu’s terminal, Git and project files, with VS Code’s interface on Windows. macOS/Linux attendees use their native Linux/Unix-style environment.

## Why try it?

- Use Bash and Linux command-line tools alongside Windows applications.
- Follow Linux-oriented development examples in a Linux environment.
- Keep Git, terminal commands and project files in the same environment.
- Connect Windows VS Code to that workspace through its WSL extension.

WSL is a useful workspace choice, not a requirement for every project. This static portfolio also works natively. If installation is blocked, use the [Windows fallback](first-time-setup.md); retry WSL when your machine is ready.

## 1. Prepare Windows

Use a supported machine and permission to install system software. Microsoft’s standard installation route requires Windows 10 version 2004/build 19041 or later, or Windows 11. Older/managed machines may need different steps. [Official WSL installation](https://learn.microsoft.com/en-us/windows/wsl/install).

Install before the session and allow time for a restart. Do not interrupt a live workshop to reboot.

## 2. Install and start Ubuntu

1. Start → PowerShell → **Run as administrator**.
2. Run:

```powershell
wsl --install
```

3. Restart if instructed; open **Ubuntu** from Start.
4. Complete Ubuntu’s username/password setup. This Linux account is separate from Windows/GitHub; password input may stay invisible.
5. In PowerShell, inspect installations:

```powershell
wsl --list --verbose
```

If Ubuntu is not installed or the default differs, select/install the distro using Microsoft’s guide. Do not guess that every machine has the same distro name. Managed-device/virtualization failures may require IT help.

## 3. Prepare tools and a Linux project folder

Open **Ubuntu**, then run one line at a time:

```sh
sudo apt update
sudo apt install git
git --version
mkdir -p ~/projects
cd ~/projects
pwd
```

`sudo` requests permission for system changes; use your Ubuntu password. `~` is your Linux home. Your folder normally begins `/home/YOUR_LINUX_USER/projects`; it is not the Windows user folder. `/mnt/c` accesses the Windows C: drive.

For Linux-tool projects, keep files in the Linux filesystem. [Microsoft environment/file-storage guide](https://learn.microsoft.com/en-us/windows/wsl/setup/environment).

Configure Git name/email using [identity setup](first-time-setup.md#tell-git-who-created-the-commit). Windows Git identity/auth settings are separate from Ubuntu’s.

## 4. Fork and clone from Ubuntu

Follow [GitHub fork/clone guide](github-first-repository.md). Clone your own fork from Ubuntu’s `~/projects`. Explore the repo with `pwd`, `ls` and `git status` before opening an editor.

## 5. Connect Windows VS Code

1. Install **VS Code on Windows**, not the desktop editor inside Ubuntu for this route.
2. In Windows VS Code’s Extensions area, install **WSL**, published by Microsoft.
3. From the cloned Ubuntu project:

```sh
cd ~/projects/msc-developer-workspace
code .
```

4. Let first connection complete. Remote status should show WSL/Ubuntu; Explorer shows your fork; integrated terminal `pwd` matches the Linux folder.

If `code .` fails, Windows VS Code → Command Palette → WSL connection action → File → Open Folder in the connected window; select your Linux checkout. [Official VS Code WSL guide](https://code.visualstudio.com/docs/remote/wsl).

## Preview and sign in

Run `explorer.exe .` in Ubuntu’s project folder to open it in Windows File Explorer, then open `starter/index.html` in your Windows browser. No server is required for this static portfolio. If the browser cannot open the WSL file path, use a Windows checkout as the fallback and complete its Git work in Windows too; preserve useful edits before switching.

Push authentication must be configured in Ubuntu. Follow [first-push sign-in](github-first-repository.md#sign-in-for-your-first-push); a Windows helper is not automatically configured in WSL.

## Checkpoint

- [ ] Ubuntu starts; `git --version` works inside it.
- [ ] Fork is cloned under Linux home/project folder.
- [ ] Git identity and push sign-in work in Ubuntu.
- [ ] VS Code connects to WSL and opens that same folder.
- [ ] Terminal, Git and editor all point to one checkout.

[Terminal exercise](../exercises/01-terminal.md) · [WSL cheatsheet](../cheatsheets/wsl.md)
