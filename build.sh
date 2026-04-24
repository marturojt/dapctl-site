#!/bin/bash
set -e
ZOLA_VERSION="0.19.2"
curl -sL "https://github.com/getzola/zola/releases/download/v${ZOLA_VERSION}/zola-v${ZOLA_VERSION}-x86_64-unknown-linux-gnu.tar.gz" \
  | tar xz -C /tmp
/tmp/zola build
echo "--- build output ---"
ls -la public/
