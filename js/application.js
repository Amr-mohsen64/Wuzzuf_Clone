//application pages by Lina -edited by Amr Mohsen
const list = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
list.map((el) => {
    let opts = {
        animation: false,
    }
    if (el.hasAttribute('data-bs-content-id')) {
        opts.content = document.getElementById(el.getAttribute('data-bs-content-id')).innerHTML;
        opts.html = true;
    }
    new bootstrap.Popover(el, opts);
})