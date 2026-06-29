#!/usr/bin/env bash

DIR="$1"
PORT="${2:-8088}"

if [ -z "$DIR" ]; then
  echo "Usage: $0 <directory> [port]"
  exit 1
fi

if [ ! -d "$DIR" ]; then
  echo "Directory not found: $DIR"
  exit 1
fi

echo "Starting static web server"
echo "Directory: $DIR"
echo "Port: $PORT"
echo "URL: http://localhost:$PORT"

cd "$DIR" || exit 1

if command -v python3 >/dev/null 2>&1; then
  python3 -m http.server "$PORT"
elif command -v python >/dev/null 2>&1; then
  python -m SimpleHTTPServer "$PORT"
else
  echo "Python not found."
  exit 1
fi