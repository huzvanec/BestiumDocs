# [BestiumDocs](https://docs.bestium.jeme.cz)

Official documentation for the [Bestium](https://github.com/huzvanec/Bestium) library for PaperMC.

View the live site: [docs.bestium.jeme.cz](https://docs.bestium.jeme.cz)

---

## Development
Development happens in the `dev` branch, which is later merged into `prod`.
Every push to `prod` triggers a [GitHub Actions workflow](https://github.com/huzvanec/BestiumDocs/blob/prod/.github/workflows/deploy-docs.yml) that builds and deploys the site to https://docs.bestium.jeme.cz.

### Requirements
This project uses [pnpm](https://pnpm.io/).

### Start Development Server
```shell
pnpm dev
```

### Build for Production
```shell
pnpm build
```
### Constants

Constants are dynamic strings (usually versions) that get injected into code blocks and inline code.

- **Inline usage:**  
  Inline code blocks automatically replace constants.  
  Example:  
  ```md
  Download the latest version of Bestium: `const::LATEST_BESTIUM`
  ```

- **Code block usage:**  
  To replace constants in a code block, add the `replace` modifier.  
  Example:  
  ````md
  ```groovy replace
  plugins {
      id 'io.papermc.paperweight.userdev' version 'const::LATEST_USERDEV'
  }
  ```
  ````

Constants are defined in [astro.config.ts](./astro.config.ts).

The remark plugin for constant replacement is located at [src/util/remark/replace-constants.ts](./src/util/remark/replace-constants.ts).

### Javadoc Links
You can reference Bestium Javadoc in links using the following formats:
- **Type (class, interface, enum, etc.):**
    ```md
    [Injectable](jd::cz.jeme.bestium.api.inject.Injectable)
    ```

- **Package:**
    ```md
    [entities](jd::cz.jeme.bestium.api.entity)
    ```

- **Method:**
    ```md
    [Injectable#addBestiumAdditionalSaveData](jd::cz.jeme.bestium.api.inject.Injectable#addBestiumAdditionalSaveData(net.minecraft.world.level.storage.ValueOutput output))
    ```

The remark plugin for Javadoc linking is located at [ src/util/remark/javadoc.ts](./src/util/remark/javadoc.ts).