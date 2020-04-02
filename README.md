<h1 align="center">
  Bare Bones
</h1>

<p>A bare bones website for client development</p>

## Quick start

1.  **Create a Bare Bones site.**


    ```shell
    # clone
    git clone https://github.com/sonnybooth-hexsu/bare-bones.git
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd bare-bones/
    yarn i; yarn run build; yarn run develop
    ```

3.  **Open the source code and start editing!**

    Site is now running at `http://localhost:8000`

## Styles

1. **Adding color variable**

    ```shell
    @value colors: "../../styles/variables.module.css";
    @value colorPrimary, colorWhite from colors;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: colorPrimary;
        color: colorWhite;
        padding: 24px;
    }
    ```

2. **Extending helper classes**

    ```shell
    .headerNavigation {
        composes: listInline from "../../styles/helpers.module.css"
    }
    ```
