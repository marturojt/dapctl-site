const GITHUB = 'https://github.com/marturojt/dapctl'
const RELEASES = 'https://github.com/marturojt/dapctl/releases/latest'

const installHtml = `<span class="comment"># pre-built binaries — Linux · macOS · Windows</span>
<span class="prompt">$</span> <a href="${RELEASES}" class="code-link">github.com/marturojt/dapctl/releases/latest</a>

<span class="comment"># from source (requires Rust 1.80+)</span>
<span class="prompt">$</span> cargo install --git https://github.com/marturojt/dapctl --tag v0.1.0

<span class="comment"># package managers — coming soon</span>
<span class="comment"># brew install marturojt/tap/dapctl   (Homebrew)</span>
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
        <span className="status-chip">v0.1.0 · released</span>
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
          <strong>v0.1.0 released</strong> — sync engine, TUI (profiles · diff · progress · log),
          guided profile wizard, 27 tests.<br />
          Real-world validated: 2,108 FLAC files · 75 GB · HiBy R4 microSD · mirror + additive.
        </p>
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
