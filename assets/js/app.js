$(document).ready(() => {

    /* ScrollSpy */
    $('body').scrollspy({ target: '#main-menu' });
    $('[data-spy="scroll"]').each(
        () => $(this).scrollspy('refresh')
    )
});
