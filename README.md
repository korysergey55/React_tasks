
# lesson5: "Router props";

    Task 1. Создание страницы детализации товара.
        - создайте компонент, который будет отвечать за детализацию информации о товаре (ProductItemDetails). Создайте базовую разметку компонента с заголовком второго уровня "Детали"
        - в файле productRoute.js:
            -- добавьте объектам дополнительное свойство isLink. Во всех объектах значение будет true.
            -- добавьте объект для страницы детализации.
                Пример: 
                    {
                        name: "ProductDetails",
                        path: "/:category/:productID",
                        component: lazy(() => import("../pages/ProductItemDetails")),
                        exact: false,
                        isLink: false,
                    },
        - в компоненте ProductsPage, при формировании NavLink (перебор массива productRoutes), добавьте дополнительную проверку на необходимость отрисовки по флагу isLink.
        - убедитесь, что компонент NavLink не отрисовывается для страницы детализации, а остальные роуты работают корректно.

        - добавьте кнопку "Детальнее" в карточке товара (компоненты LaptopListItem и PhoneListItem).

        - добавьте событие onClick на кнопку. По клику вызывать функцию openDetails, которая будет открывать страницу детализации. Для этого оберните компонент LaptopListItem (PhoneListItem) в функцию высшего порядка withRouter(имортировать из библиотеки react-router-dom)

        - деструктуризируйте в параметрах пропы match и history.

        - в функцию openDetails, при помощи history.push() добавьте переход на страницу детализации. 
            Пример: 
                const openDetails = () => {
                    history.push({
                    pathname: `${match.path}/${laptop.id}}`,
                    });
                };  
        - Проверьте работоспособность приложения.

    Task 2. Добавление кнопки "Назад".
        - на странице ProductItemDetails добавьте кнопку назад.
        - добавьте обработчик собітия onClick с функцией goBack, которая будет осуществлять переход на предыдущую страницу. Для этого:
            -- в компоненте LaptopListItem (PhoneListItem) в функции openDetails, в объект, передаваемый в history.push(), добавьте дополнительное свойство from, в которое укажите текущий url ()
                Пример: 
                    const openDetails = () => {
                        history.push({
                        pathname: `${match.path}/${laptop.id}`,
                        state: { from: location.pathname },
                        });
                    };
            -- оберните ProductItemDetails в функцию высшего порядка withRouter(имортировать из библиотеки react-router-dom);
            -- в функции goBack выполните метод history.push с аргументами, которые передаются в свойстве location.state.from. Обязательно произведите проверку, что значение state существует. В противном случае, осуществляйте переход на страницу, категория которой, указана в url. Для этого необходимо использовать свойство match.params.category.
                Пример: 
                const goBack = () => {
                    if (location.state) {
                    history.push(location.state.from);
                    } else history.push(`/products/${match.params.category}`);
                };
            -- проверьте работсоспособность приложения.

    Task 3. Отрисовка компонента ProductItemDetails в виде карточки. (НЕ ВЫПОЛНЯЕМ НА ПРАКТИКЕ)





      