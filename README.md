# Stable diffusion - Electron

**NOTE**: This MVP is for M1/m2 macs only.

Instructions to setup:

1. Update brew, and install python.

```sh
brew update
brew install python
```

2. Install the dependencies necessary.

```sh
brew install Cmake protobuf rust
```

3. Ensure curl exists.

```sh
brew install curl
```

4. Install pnpm

```sh
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

5. Install the app and run it.

```sh
pnpm install
pnpm build
```
