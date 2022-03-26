const getStoredCourse = () => {
    let courseCart;
    const stored = localStorage.getItem("course-cart");
    if (stored) {
        courseCart = JSON.parse(stored);
    }
    return courseCart;
}
const addDb = (id) => {
    let courseCart;
    const stored = localStorage.getItem("course-cart");
    if (stored) {
        courseCart = JSON.parse(stored);
    }
    else {
        courseCart = {};
    }

    const quantity = courseCart[id];
    if (quantity) {
        courseCart[id] = 1;
    }
    else {
        courseCart[id] = 1;
    }

    localStorage.setItem("course-cart", JSON.stringify(courseCart));
}
const deleteDb = (id) => {
    let courseCart;
    const stored = localStorage.getItem("course-cart");
    if (stored) {
        courseCart = JSON.parse(stored);
        if (id in courseCart) {
            delete courseCart[id];
        }
    }
    localStorage.setItem("course-cart", JSON.stringify(courseCart));
}
const removeDb = () => {
    localStorage.removeItem("course-cart");
}

export { addDb, removeDb, getStoredCourse, deleteDb };