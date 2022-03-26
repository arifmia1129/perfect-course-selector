const getStoredCourse = () => {
    let courseCart;
    const stored = localStorage.getItem("course-cart");
    if (stored) {
        courseCart = JSON.parse(stored);
    }
    return courseCart;
}
const addDb = (id) => {
    console.log(id);
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

const removeDb = () => {
    localStorage.removeItem("course-cart");
}

export { addDb, removeDb, getStoredCourse };