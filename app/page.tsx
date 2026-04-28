const GITHUB = 'https://github.com/marturojt/dapctl'
const RELEASES = 'https://github.com/marturojt/dapctl/releases/latest'

const installHtml = `<span class="comment"># pre-built binaries — Linux · macOS · Windows</span>
<span class="prompt">$</span> <a href="${RELEASES}" class="code-link">github.com/marturojt/dapctl/releases/latest</a>

<span class="comment"># from source (requires Rust 1.80+)</span>
<span class="prompt">$</span> cargo install --git https://github.com/marturojt/dapctl --tag v0.2.0

<span class="comment"># Homebrew (macOS / Linux)</span>
<span class="prompt">$</span> brew tap marturojt/tap
<span class="prompt">$</span> brew install dapctl

<span class="comment"># AUR / Scoop — coming soon</span>
<span class="comment"># yay -S dapctl-bin                   (AUR)</span>
<span class="comment"># scoop install dapctl                (Scoop)</span>`

export default function Home() {
  return (
    <div className="page">
      <header className="hero">
        <h1 className="hero-title">dapctl</h1>
        <p className="hero-tagline">TUI/CLI sync tool for HiFi Digital Audio Players</p>
        <nav className="hero-links">
          <a className="btn" href={GITHUB}>GitHub</a>
          <a className="btn" href="#install">Install</a>
        </nav>
        <span className="status-chip">v0.2.0 · released</span>
      </header>

      <section id="how-it-works">
        <h2 className="section-title">how it works</h2>
        <ol className="workflow">
          <li>
            <span className="step-num">1.</span>
            <span>eject microSD from your DAP</span>
          </li>
          <li>
            <span className="step-num">2.</span>
            <span>connect via card reader</span>
          </li>
          <li>
            <span className="step-num">3.</span>
            <span className="step-cmd">dapctl scan</span>
            <span className="step-sep">—</span>
            <span className="step-desc">detect and identify</span>
          </li>
          <li>
            <span className="step-num">4.</span>
            <span className="step-cmd">dapctl diff</span>
            <span className="step-sep">—</span>
            <span className="step-desc">preview changes before touching anything</span>
          </li>
          <li>
            <span className="step-num">5.</span>
            <span className="step-cmd">dapctl sync</span>
            <span className="step-sep">—</span>
            <span className="step-desc">safe copy via temp+rename</span>
          </li>
        </ol>
      </section>

      <section id="features">
        <h2 className="section-title">features</h2>
        <ul className="features">
          <li><strong>DAP-aware profiles</strong> — per-device filesystem limits, codec matrix, layout quirks, firmware exclusions</li>
          <li><strong>Safe by default</strong> — dry-run first, temp+rename copy, per-run JSONL manifest for auditability</li>
          <li><strong>Cross-platform</strong> — Linux · macOS · Windows, exFAT / FAT32 / NTFS</li>
          <li><strong>TUI + CLI</strong> — interactive terminal UI or fully scriptable with <code>--yes</code> / <code>--dry-run</code></li>
          <li><strong>Modes</strong> — additive (never deletes) or mirror (exact replica)</li>
          <li><strong>Tag-based filters</strong> — include/exclude by artist · genre · sample rate · bit depth via lofty</li>
          <li><strong>Transcode pipeline</strong> — ffmpeg rules (e.g. DSF→FLAC) with blake3-keyed cache; re-encodes only when source changes</li>
          <li><strong>M3U export</strong> — <code>dapctl export m3u</code> generates a DAP-ready playlist from the same filters as sync</li>
          <li><strong>Checksum verify</strong> — blake3 streaming hash detects silent corruption even when size and mtime match</li>
          <li><strong>GPLv3</strong> — no telemetry, offline by default, no lock-in</li>
        </ul>
      </section>

      <section id="install">
        <h2 className="section-title">install</h2>
        <div className="install-block">
          <pre dangerouslySetInnerHTML={{ __html: installHtml }} />
        </div>
        <p className="install-note">
          Pre-built static binaries for Linux (x86_64 + aarch64), macOS (universal), and Windows
          are available on the <a href={RELEASES}>releases page</a>.
          Source install requires Rust 1.80+ (<a href="https://rustup.rs">rustup.rs</a>).
        </p>
      </section>

      <section id="not">
        <h2 className="section-title">what dapctl is not</h2>
        <ul className="not-list">
          <li>Not a tag editor — use <a href="https://picard.musicbrainz.org">MusicBrainz Picard</a> or <a href="https://beets.io">beets</a></li>
          <li>Not a duplicate finder or library manager</li>
          <li>Not a music streaming client or cloud sync tool</li>
          <li>No DLNA, AirPlay, or network streaming</li>
          <li>No telemetry, no analytics, no network calls by default</li>
        </ul>
      </section>

      <section id="status">
        <h2 className="section-title">status</h2>
        <p className="status-text">
          <strong>v0.2.0 released</strong> — blake3 checksum verification, tag-based filters
          (artist · genre · sample rate · bit depth), ffmpeg transcode pipeline with blake3-keyed
          cache, <code>dapctl export m3u</code>, 39 tests.
        </p>
        <p className="status-text">
          <strong>v0.1.0</strong> — sync engine, TUI (profiles · diff · progress · log · wizard),
          real-world validated: 2,108 FLAC · 75 GB · HiBy R4 microSD.
        </p>
        <p className="status-text">
          <strong>v0.3 up next</strong> — TUI audio player (rodio + symphonia), <code>dapctl audit</code> (offline read-only library health report), <code>dapctl cover fetch</code> (MusicBrainz + Cover Art Archive, opt-in with <code>--online</code>).
        </p>
        <a className="backlog-link" href={`${GITHUB}/releases/tag/v0.2.0`}>
          → v0.2.0 release notes
        </a>
        {' '}
        <a className="backlog-link" href={`${GITHUB}/releases/tag/v0.1.0`}>
          → v0.1.0 release notes
        </a>
        {' '}
        <a className="backlog-link" href={`${GITHUB}/blob/main/BACKLOG.md`}>
          → roadmap (BACKLOG.md)
        </a>
      </section>

      <footer>
        <div className="footer-links">
          <a href={GITHUB}>GitHub</a>
          <a href={`${GITHUB}/blob/main/LICENSE`}>GPLv3</a>
          <a href={`${GITHUB}/blob/main/docs/DAP_PROFILE_SPEC.md`}>Contribute a DAP profile</a>
        </div>
        <span className="footer-build">dapctl.com</span>
      </footer>
    </div>
  )
}
