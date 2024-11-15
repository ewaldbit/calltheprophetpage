$(function(){
  cliquemenu();
  scrollitem();
    function cliquemenu() {
      $('#menu-principal a').click(function(){
        $('#menu-principal a').parent().removeClass('active');
        $('#menu-principal a[ref_sys='+$(this).attr('ref_sys')+']').parent().addClass('active');
        return false;
      });
    }

    function scrollitem(){
      $('#menu-principal a, .list-group a').click(function(){
        var ref = '#'+$(this).attr('ref_sys');
        var offset = $(ref).offset().top;
        $('html,body').animate({'scrollTop':offset-50});
      });
    }
})  