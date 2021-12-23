import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import axios from "axios";

import styles from "./download.module.scss";
import clsx from "clsx";

const Download = () => {
  const context = useDocusaurusContext();
  const [release, setRelease] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getRelease() {
      try {
        const latestRelease = await axios.get(
          "https://api.github.com/repos/loophole/cli/releases/latest"
        );
        setRelease(latestRelease);
        setLoading(false);
        setError(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    }
    getRelease();
  }, []);
  const { siteConfig = {} } = context;

  const windowsCliAssets =
    !loading && !error
      ? release.data.assets.filter(
          (a) => a.name.includes("loophole-cli") && a.name.includes("windows")
        )
      : [];
  const windowsDesktopAssets =
    !loading && !error
      ? release.data.assets.filter(
          (a) =>
            a.name.includes("loophole-desktop") && a.name.includes("windows")
        )
      : [];
  const linuxCliAssets =
    !loading && !error
      ? release.data.assets.filter(
          (a) => a.name.includes("loophole-cli") && a.name.includes("linux")
        )
      : [];
  const linuxDesktopAssets =
    !loading && !error
      ? release.data.assets.filter(
          (a) => a.name.includes("loophole-desktop") && a.name.includes("linux")
        )
      : [];
  const macCliAssets =
    !loading && !error
      ? release.data.assets.filter(
          (a) => a.name.includes("loophole-cli") && a.name.includes("macos")
        )
      : [];
  const macDesktopAssets =
    !loading && !error
      ? release.data.assets.filter(
          (a) => a.name.includes("loophole-desktop") && a.name.includes("macos")
        )
      : [];

  const emptyCliAssets =
    !windowsCliAssets.length || !linuxCliAssets.length || !macCliAssets.length;
  const emptyDesktopAssets =
    !windowsDesktopAssets.length ||
    !linuxDesktopAssets.length ||
    !macDesktopAssets.length;

  return (
    <Layout title="Download" description={siteConfig.tagline}>
      <header className="hero">
        <div className="container">
          <h1 className="hero__subtitle">Download &amp; Setup</h1>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
           Loophole has two options, command line (CLI) or Graphical User Interface (Desktop), choose whatever suits you the best!
          </div>
        </section>
        <div className="spacer"></div>
        <section>
          <div className="container">
            <div className="content">
              <h1 className="title is-3">CLI</h1>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div>
              {loading || error || emptyCliAssets ? (
                <div className="row">
                  <div className={clsx("col col--12", styles.downloadList)}>
                    {loading ? (
                      <h5>Loading possible download options...</h5>
                    ) : null}
                    {!loading && (error || emptyCliAssets) ? (
                      <h5>
                        Please head to{" "}
                        <a
                          href="https://github.com/loophole/cli/releases/latest"
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>{" "}
                        to get newest release.
                      </h5>
                    ) : null}
                  </div>
                </div>
              ) : (
                <div className="row">
                  <div className={clsx("col col--4", styles.downloadList)}>
                    <div>Windows</div>
                    <div>
                      <ul>
                        {windowsCliAssets
                          .map((a) => (
                            <li key={a.id}>
                              <a
                                href={a.browser_download_url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {a.name
                                  .split("_")
                                  .pop()
                                  .split(".")[0]
                                  .replace("32bit", "Windows (32bit)")
                                  .replace("64bit", "Windows (64bit)")
                                  .replace("i386", "Windows (32bit)")
                                  .replace("amd64", "Windows (64bit)")}
                              </a>
                            </li>
                          ))
                          .sort((a) => a.id)}
                      </ul>
                    </div>
                  </div>
                  <div className={clsx("col col--4", styles.downloadList)}>
                    <div>Linux</div>
                    <div>
                      <ul>
                        {linuxCliAssets
                          .map((a) => (
                            <li key={a.id}>
                              <a
                                href={a.browser_download_url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {a.name
                                  .split("_")
                                  .pop()
                                  .split(".")[0]
                                  .replace("32bit", "Linux (32-bit)")
                                  .replace("i386", "Linux (32-bit)")
                                  .replace("64bit", "Linux (64-bit)")
                                  .replace("amd64", "Linux (64-bit)")
                                  .replace("arm64", "Linux (arm64)")
                                  .replace("armv6", "Linux (armv6)")
                                  .replace("armv7", "Linux (armv7)")}
                              </a>
                            </li>
                          ))
                          .sort((a) => a.id)}
                      </ul>
                    </div>
                  </div>
                  <div className={clsx("col col--4", styles.downloadList)}>
                    <div>Mac OS</div>
                    <div>
                      <ul>
                        {macCliAssets
                          .map((a) => (
                            <li key={a.id}>
                              <a
                                href={a.browser_download_url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {a.name
                                  .split("_")
                                  .pop()
                                  .split(".")[0]
                                  .replace("64bit", "Mac OS (64-bit)")
                                  .replace("amd64", "Mac OS (64-bit)")}
                              </a>
                            </li>
                          ))
                          .sort((a) => a.id)}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h4>Unpack</h4>
            <p>
              On Linux or OSX you can unzip loophole from a terminal with the
              following command:
              <pre>
                <code>$ unzip /path/to/loophole-cli-&lt;version&gt;.zip </code>
              </pre>
              On Windows, just double click{" "}
              <em>loophole-cli-&lt;version&gt;.zip</em>.
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <h4>Create account or login</h4>
            <p>
              Firstly, open your favorite terminal and change directory to the
              place you downloaded loophole. To authenticate your CLI, execute
              <pre>
                <code>$ loophole account login</code>
              </pre>
              and follow the instructions on your screen to complete the login.
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <h4>Run it</h4>
            <p>
              <span>
                To start an HTTP tunnel on port 3000, execute this next:
              </span>
              <pre>
                <code>
                  $ loophole http 3000
                  <br />
                  <br />
                  # or for 1.0.0-beta.8 and older
                  <br />$ loophole 3000
                </code>
              </pre>
              Read the <Link to={useBaseUrl("/docs")}>documentation</Link> to
              get more ideas on how to use Loophole.
            </p>
          </div>
        </section>
        <div className="spacer"></div>
        <section>
          <div className="container">
            <div className="content">
              <h1 className="title is-3">Desktop</h1>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div>
              Please download the latest version of Loophole for your Operating
              System and Architecture.
              {loading || error || emptyDesktopAssets ? (
                <div className="row">
                  <div className={clsx("col col--12", styles.downloadList)}>
                    {loading ? (
                      <h5>Loading possible download options...</h5>
                    ) : null}
                    {!loading && (error || emptyDesktopAssets) ? (
                      <h5>
                        Please head to{" "}
                        <a
                          href="https://github.com/loophole/cli/releases/latest"
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>{" "}
                        to get newest release.
                      </h5>
                    ) : null}
                  </div>
                </div>
              ) : (
                <div className="row">
                  <div className={clsx("col col--4", styles.downloadList)}>
                    <div>Windows</div>
                    <div>
                      <ul>
                        {windowsDesktopAssets
                          .map((a) => (
                            <li key={a.id}>
                              <a
                                href={a.browser_download_url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {a.name
                                  .split("_")
                                  .pop()
                                  .split(".")[0]
                                  .replace("32bit", "Windows (32bit)")
                                  .replace("64bit", "Windows (64bit)")
                                  .replace("i386", "Windows (32bit)")
                                  .replace("amd64", "Windows (64bit)")}
                              </a>
                            </li>
                          ))
                          .sort((a) => a.id)}
                      </ul>
                    </div>
                  </div>
                  <div className={clsx("col col--4", styles.downloadList)}>
                    <div>Linux</div>
                    <div>
                      <ul>
                        {linuxDesktopAssets
                          .map((a) => (
                            <li key={a.id}>
                              <a
                                href={a.browser_download_url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {a.name
                                  .split("_")
                                  .pop()
                                  .split(".")[0]
                                  .replace("32bit", "Linux (32-bit)")
                                  .replace("i386", "Linux (32-bit)")
                                  .replace("64bit", "Linux (64-bit)")
                                  .replace("amd64", "Linux (64-bit)")
                                  .replace("arm64", "Linux (arm64)")
                                  .replace("armv6", "Linux (armv6)")
                                  .replace("armv7", "Linux (armv7)")}
                              </a>
                            </li>
                          ))
                          .sort((a) => a.id)}
                      </ul>
                    </div>
                  </div>
                  <div className={clsx("col col--4", styles.downloadList)}>
                    <div>Mac OS</div>
                    <div>
                      <ul>
                        {macDesktopAssets
                          .map((a) => (
                            <li key={a.id}>
                              <a
                                href={a.browser_download_url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {a.name
                                  .split("_")
                                  .pop()
                                  .split(".")[0]
                                  .replace("64bit", "Mac OS (64-bit)")
                                  .replace("amd64", "Mac OS (64-bit)")}
                              </a>
                            </li>
                          ))
                          .sort((a) => a.id)}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h4>Unpack</h4>
            <p>
              On Linux or OSX you can unzip loophole from a terminal with the
              following command:
              <pre>
                <code>
                  $ unzip /path/to/loophole-desktop-&lt;version&gt;.zip{" "}
                </code>
              </pre>
              On Windows, just double click{" "}
              <em>loophole-desktop-&lt;version&gt;.zip</em>.
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <h4>Run it</h4>
            <p>
              Simply <strong>doubleclick</strong> on it or run from terminal:
            </p>
            <p>
              <pre>
                <code>$ loophole-desktop</code>
              </pre>
              Read the <Link to={useBaseUrl("/docs")}>documentation</Link> to
              get more ideas on how to use Loophole.
            </p>
          </div>
        </section>
        <div className="spacer"></div>
      </main>
    </Layout>
  );
};

export default Download;
