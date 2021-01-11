/*dat code jquery va js vao day*/
function getHTML() {
    /*JS THUAN*/
    /*const node = document.querySelector('.html');
    const html = node.innerHTML;*/

    const html = $('.html').html();
    $('.html').html('<span>wewewe</span>');
    alert(html);
}

function removeHTML() {
    $('.remove').remove();
}

function afterMe() {
    $('.after').after('<div>I am after you</div>')
}

function getValue() {
    const val = $('.input').val();
    alert(val);
}

function empty() {
    $('.empty').empty();
}

function append(){
    $('ul').append('<li>B</li>');
}

function setSrc(){
  const src = $('.img').attr('src');
  alert(src);
}
