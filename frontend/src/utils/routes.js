// Этот файл содержит определения маршрутов для вашего приложения.
export const ROUTES = {
    HOME: "/",
    CART: "/cart",
    PRODUCT: "/:categoryName/product/:productId", // Изменен для соответствия новой структуре URL
    CATEGORY: "/:categoryName", // Изменен для динамического имени категории
    // Здесь нет маршрута для Subcategories, так как вы указали, что такой компонент не нужен
};
