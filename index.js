function toggleChildren(event, element) {
    event.stopPropagation(); // Prevent event bubbling to parent elements
    const children = element.querySelector('.children');
    if (children) {
        const isVisible = children.style.display === 'block';
        children.style.display = isVisible ? 'none' : 'block';
    }
}
