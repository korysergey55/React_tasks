
# lesson5: "Code_splitting";

    Task 1. Рендер динамически загружаемых компонентов.
        - Произвести рефакторинг кода mainRoutes.js:
            -- в файле mainRoutes.js импортировать функцию lazy
                import { lazy } from "react";
            -- применить функцию-згарузчик, которая возвращает результат динамического импорта
                Пример:
                    {
                        name: "Home",
                        path: "/",
                        component: lazy(() => import("../pages/HomePage")),
                        exact: true,
                    },
        - Произвести рефакторинг кода mainRoutes.js:
            -- в компонене Main импортировать компонет Suspense
                import { lazy } from "react";
            -- обернуть возвращаемую разметку (роуты) в компонент Suspense и передать в него проп fallback. В качестве пропа будем на данном этапе передавать fallback={<h2>...loading</h2>}>
        - Проверить работоспособность кода.

    Task 2. возобновление работы компонентов Cart PhoneList и LaptopList
        - выполнить ркфакторинг компонента Main:
            --создать функцию getData, которая будет передавать в компоненты-контейнеры те данные, которые они ожидают
                Пример:
                getData = (name) => {
                    switch (name) {
                    case "products":
                        return {
                        phones: this.state.phones,
                        laptops: this.state.laptops,
                        addToCart: this.addToCart,
                        };
                    case "cart":
                        return {
                        cart: this.state.cart,
                        removeFromCart: this.removeFromCart,
                        createOrder: this.createOrder,
                        };
                    case "administration":
                        return {
                        addNewAdv: this.addNewAdv,
                        };

                    default:
                        return {};
                    }
                };

                -- заменить проп component на проп render. Передать данные, которые получаются в результате работы функции getData.
                -- произвести соответствующие изменения в компонентах-контейнерах и компонентах, которые получают пропы. Разметку передавать следующим образом:
                    {mainRoutes.map(({ name, path, exact, component: MyComponent }) => (
                        <Route
                            path={path}
                            exact={exact}
                            render={(props) => (
                            <MyComponent
                                {...props}
                                data={this.getData(name.toLowerCase())}
                            />
                            )}
                            key={path}
                        />
                        ))}
                -- аналогично выполнить рефакторинг компонента ProductsPage



        
        
    