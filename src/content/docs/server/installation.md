---
title: Installation
description: Learn how to install and setup Bestium on your server.
---

## Install Bestium

To install Bestium on your PaperMC server:
1. Download the plugin JAR from the [latest release](https://github.com/huzvanec/Bestium/releases/latest) on GitHub.
2. Make sure your server version matches the one listed in the release title.
   For example, a release titled `Bestium 1.0.0 for Paper 1.21.6` will only work on PaperMC 1.21.6.
3. Drop the downloaded JAR into your server's `plugins/` folder.
4. Restart your server.

Done!

## Install Bestium Example

Bestium is a library plugin, which means it doesn't add anything to the game by itself.
It provides tools that other plugins can use to register and spawn custom entities.

If you don't have a plugin using Bestium yet, you can try the [Bestium Example plugin](https://github.com/huzvanec/BestiumExample):
1. Download the plugin JAR from the [latest release](https://github.com/huzvanec/BestiumExample/releases/latest).
2. Drop the downloaded JAR into your server's `plugins/` folder, right next to the Bestium JAR.
3. Restart your server again.

## Verifying

If you installed Bestium with a plugin that depends on it, you should see Bestium doing some work in your console. If no errors appear, that means that the injection was successful and you can start summonning custom entities.