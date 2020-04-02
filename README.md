<h1 align="center">
  Bare Bones
</h1>

<p>A bare bones website for client development</p>

## Quick start

**Create a Bare Bones site**


    ```shell
    # clone
    git clone https://github.com/sonnybooth-hexsu/bare-bones.git
    ```

**Start developing**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd bare-bones/
    yarn i; yarn run build; yarn run develop
    ```

**Open the source code and start editing**

    Site is now running at `http://localhost:8000`

## Styles

**Adding color variable**

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

**Extending helper classes**

    ```shell
    .headerNavigation {
        composes: listInline from "../../styles/helpers.module.css"
    }
    ```
