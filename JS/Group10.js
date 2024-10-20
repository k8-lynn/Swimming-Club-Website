function showMemberInfo(element) {
    
    element.classList.toggle('active');

    
    const otherBoxes = document.querySelectorAll('.box:not(.active)');
    otherBoxes.forEach(box => box.classList.remove('active'));
}
