import BlogTemplate from "../../components/BlogTemplate";

const MyExperienceWithFedora = () => {
	return (
		<BlogTemplate
			title={{
				title:
					"Something New, Something Old: Why I Finally Left Windows for Linux",
				subHeading:
					"Why I finally left Windows for Fedora Linux, and how I got everything installed and running.",
				description:
					"Why I finally left Windows for Fedora Linux, and how I got everything installed and running.",
				dateTime: "2026-09-18",
				humanDate: "September 18th, 2026",
				url: "my_experience_with_fedora",
			}}
		>
			<p>
				Every time I opened my laptop lately, something got in my way
				before I could even start working — an update, a pop-up, a
				nag about OneDrive storage I don&apos;t need. For someone
				who&apos;s been a die-hard Windows user for as long as I can
				remember, that was a strange thing to admit. It&apos;s the
				only operating system I&apos;ve ever used, and yet every
				time I logged on, it felt like there was more stuff standing
				between me and actually getting anything done. And why is
				this update so critical when recent updates have broken so
				much of Windows already?
			</p>
			<p>
				Inspired by Linus Tech Tips and their 30-day challenge of
				migrating to Linux, I decided to give it a try. Off to the
				races I went, armed with a trusty USB stick and Google to
				figure out what I actually needed.
			</p>

			<h2>Why I Wanted to Install Fedora</h2>

			<h3>Productivity</h3>
			<p>
				I felt like I was fighting Windows every time I opened my
				laptop. There was always some service, update, or pop-up
				demanding my attention before I could even start working. I
				overheard Luke, one of the hosts on Linus Tech Tips&apos;
				WAN Show podcast, say he&apos;s really come to like Linux
				because it gets out of the way and lets him work. I love
				that idea.
			</p>
			<p>
				With my ADHD, even small distractions can put a real dent in
				my productivity. I found myself not developing at home
				simply because of everything Windows was throwing at me. An
				operating system that understands it&apos;s a computer, not
				a destination — that sounded very attractive.
			</p>

			<h3>Something New</h3>
			<p>
				I&apos;ve SSH&apos;d into my fair share of Linux boxes and
				servers over the years, so I&apos;m familiar with Linux, but
				I&apos;d never actually <em>lived</em> in it. You&apos;d
				think that after years of writing Bash scripts, a guy
				would&apos;ve tried it by now. So let&apos;s try it.
				It&apos;s not the end of the world if I hate it — I can
				always go back to Windows.
			</p>

			<h3>Something Old</h3>
			<p>
				My laptop is old. I&apos;m running a Dell XPS 13 7390 2-in-1
				from 2019. It&apos;s still a great machine, but it&apos;s
				getting a little long in the tooth. From what I understand,
				Linux doesn&apos;t come with nearly the system requirements
				and overhead that Windows 11 does. Between the bloat and
				years of feature creep, Windows feels like it needs a
				beefier computer just to keep up. Chromebooks get by on a
				quarter of what a Windows machine needs, and mine could use
				a little of that love.
			</p>

			<h3>Something Borrowed</h3>
			<p>
				Linux isn&apos;t just an operating system like Windows or
				Mac — it&apos;s a group effort. So many people have
				contributed to its health and made it as good as it is
				today. I figured I should at least try to contribute to
				that health myself and see how I like it. I&apos;m standing
				on the shoulders of a lot of hard work that&apos;s made the
				world a better place — or at least the world of computing.
			</p>

			<h3>Something Blue</h3>
			<p>
				It feels good to move away from a massive operating system
				and a trillion-dollar company. Even though I&apos;ve been a
				staunch Windows defender for years, I&apos;ve had a secret
				love for Linux and the openness it represents. I guess it
				was time to put my mouth where my money is.
			</p>

			<h2>I Am Loving Linux</h2>
			<p>
				The more time I spend on Linux, the more I&apos;m loving the
				experience. I couldn&apos;t recommend it enough. The
				installation process has become so easy (at least for me),
				and everything I need a computer to do — email, browser,
				Spotify, you name it — is almost immediately available right
				out of the box. Something about it just feels charming and
				homely. It&apos;s like having homemade tacos after years of
				eating Taco Bell and calling it authentic (no shade to you,
				Taco Bell).
			</p>
			<p>
				With all that in mind, I was sold. Here&apos;s how I
				actually got Linux installed on my Dell.
			</p>

			<h2>Background</h2>
			<p>
				Migrating a Dell XPS 13 7390 2-in-1 from Windows to Linux
				for daily use: email, web browsing, and development (SQL,
				JavaScript, TypeScript).
			</p>

			<h2>Distro Selection</h2>
			<p>
				Considered: Fedora, CachyOS, Bazzite, Linux Mint, Pop!_OS,
				Kubuntu.
			</p>
			<p>
				<strong>Chose: Fedora</strong>, based on:
			</p>
			<ul>
				<li>
					Some prior Linux experience, rarely uses touch/tablet/pen
					features, prioritizes stability over bleeding-edge or
					heavy customization.
				</li>
				<li>
					The 7390 2-in-1 uses Ice Lake hardware, which benefits
					from a newer kernel (WiFi, trackpad, audio quirks) —
					Fedora ships more current kernels than Ubuntu/Mint-based
					distros while remaining well-tested.
				</li>
				<li>
					Ruled out CachyOS/rolling releases (stability risk),
					Bazzite (gaming-focused, not needed), Mint (older kernel
					on this specific hardware), Pop!_OS (new COSMIC desktop
					still maturing as of its 24.04 LTS release).
				</li>
			</ul>
			<p>
				<strong>Desktop environment: KDE Plasma</strong> over GNOME
				(Workstation)
			</p>
			<ul>
				<li>More traditional, customizable desktop; lighter on RAM.</li>
				<li>
					Fedora KDE Plasma is an official spin — same
					kernel/stability/update cadence as Workstation.
				</li>
				<li>
					Fedora Plasma 6.x is considered mature; Wayland rough
					edges from earlier versions are largely resolved.
				</li>
			</ul>

			<h2>Dual-Boot Decision</h2>
			<p>
				Kept Windows alongside Fedora (dual-boot) rather than wiping
				the drive, since future need for Windows-only software
				wasn&apos;t certain. Windows can be removed later if it
				turns out to be unnecessary; going the other direction is
				more hassle.
			</p>

			<h2>Pre-Install Checklist</h2>
			<ul>
				<li>Backed up data before partitioning.</li>
				<li>
					Downloaded the <strong>Fedora KDE Plasma Desktop</strong>{" "}
					spin (separate ISO from Workstation/GNOME).
				</li>
				<li>Created bootable USB via Fedora Media Writer.</li>
				<li>
					In Windows Disk Management: shrank C: drive, freeing
					~91GB (93345 MB) for Fedora, using the default suggested
					shrink amount — no need to push for a round 100GB since
					dev work (SQL/JS/TS) generally isn&apos;t disk-heavy.
				</li>
				<li>
					In BIOS (F2 at boot):
					<ul>
						<li>SATA mode set to AHCI (not RAID)</li>
						<li>
							Secure Boot left enabled (Fedora supports it
							natively)
						</li>
						<li>Fast Boot disabled temporarily</li>
					</ul>
				</li>
				<li>Booted installer via F12 boot menu.</li>
			</ul>

			<h2>Post-Install Setup</h2>

			<h3>System update</h3>
			<pre>
				<code>{`sudo dnf update -y`}</code>
			</pre>

			<h3>RPM Fusion (codecs, drivers)</h3>
			<pre>
				<code>{`sudo dnf install https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
sudo dnf update -y`}</code>
			</pre>

			<h3>Multimedia codecs</h3>
			<pre>
				<code>{`sudo dnf swap ffmpeg-free ffmpeg --allowerasing
sudo dnf group upgrade sound-and-video`}</code>
			</pre>

			<h2>Issues Encountered &amp; Fixes</h2>

			<h3>KScreen backend missing</h3>
			<p>Error: &quot;No KScreen backend found.&quot;</p>
			<pre>
				<code>{`sudo dnf install kscreen
sudo reboot`}</code>
			</pre>
			<p>If unresolved:</p>
			<pre>
				<code>{`sudo dnf reinstall kscreen libkscreen plasma-workspace
systemctl --user status kscreen`}</code>
			</pre>

			<h3>Fingerprint reader testing</h3>
			<pre>
				<code>{`rpm -q fprintd                  # check installed
sudo dnf install fprintd fprintd-pam   # if missing
fprintd-list $USER              # check device detected
fprintd-enroll                  # enroll fingerprint
fprintd-verify                  # test verification`}</code>
			</pre>
			<p>
				Or via GUI: System Settings → Users → fingerprint enrollment
				(if detected).
			</p>

			<h3>Audio: monitor/external audio not available → then no audio at all</h3>
			<p>
				Symptoms progressed from &quot;monitor audio unavailable&quot;
				to a complete audio dropout (PipeWire falling back to{" "}
				<code>auto_null</code> dummy sink) after some troubleshooting
				steps.
			</p>
			<p>Diagnosis process:</p>
			<pre>
				<code>{`pactl list sinks short           # check active sinks
pactl info | grep "Default Sink" # check default sink
aplay -l                         # confirm ALSA sees hardware directly`}</code>
			</pre>
			<p>
				<code>aplay -l</code> confirmed ALSA saw all hardware fine
				(USB audio, built-in PCH speakers, and HDMI audio to the LG
				UltraWide monitor) — meaning the issue was isolated to
				PipeWire/WirePlumber losing its device graph, not a
				hardware/driver problem.
			</p>
			<p>Fix — full PipeWire/WirePlumber reset:</p>
			<pre>
				<code>{`systemctl --user stop pipewire pipewire-pulse wireplumber
pkill -9 pipewire
pkill -9 wireplumber
systemctl --user start pipewire pipewire-pulse wireplumber
pactl list sinks short   # verify real sinks reappear`}</code>
			</pre>
			<p>
				If still stuck, clear WirePlumber&apos;s cached state:
			</p>
			<pre>
				<code>{`rm -rf ~/.local/state/wireplumber
systemctl --user restart pipewire pipewire-pulse wireplumber`}</code>
			</pre>
			<p>Last resort: full reboot.</p>

			<h2>Software Installed</h2>
			<table>
				<thead>
					<tr>
						<th>Tool</th>
						<th>Install Method</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Git</td>
						<td>
							<code>sudo dnf install git</code>
						</td>
					</tr>
					<tr>
						<td>Node.js</td>
						<td>
							via <code>nvm</code> (
							<code>nvm install --lts</code>) for version
							flexibility
						</td>
					</tr>
					<tr>
						<td>PostgreSQL</td>
						<td>
							<code>
								sudo dnf install postgresql
								postgresql-server postgresql-contrib
							</code>
							, then{" "}
							<code>sudo postgresql-setup --initdb</code>
						</td>
					</tr>
					<tr>
						<td>Thunderbird (email client)</td>
						<td>
							<code>sudo dnf install thunderbird</code>
						</td>
					</tr>
					<tr>
						<td>Claude Code (CLI)</td>
						<td>
							<code>
								npm install -g @anthropic-ai/claude-code
							</code>
						</td>
					</tr>
					<tr>
						<td>Obsidian</td>
						<td>
							Flatpak:{" "}
							<code>
								flatpak install flathub md.obsidian.Obsidian
							</code>
						</td>
					</tr>
				</tbody>
			</table>
			<p>
				<strong>Note on Claude Desktop app:</strong> Officially
				supported only on Ubuntu 22.04+/Debian 12+ (apt-based), not
				natively compatible with Fedora&apos;s <code>dnf</code>.
				Using the web app (claude.ai) and Claude Code CLI instead as
				the practical path on Fedora.
			</p>

			<h2>Outstanding / To Revisit</h2>
			<ul>
				<li>
					Fingerprint reader support unconfirmed (known to be
					hit-or-miss on this model under Linux).
				</li>
				<li>
					UI Update to make it a little prettier. It&apos;s pretty
					enough out of the box but some additional customization
					is always nice.
				</li>
			</ul>
		</BlogTemplate>
	);
};

export default MyExperienceWithFedora;
