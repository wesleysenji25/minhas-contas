(function(){
  function setup(){
    var bottom=document.getElementById('bottom');
    if(bottom) bottom.style.display='none';
    var app=document.getElementById('app');
    if(!app) return;
    function addTopButton(sectionId,label,fn){
      var section=document.getElementById(sectionId); if(!section || section.querySelector('.ios-add')) return;
      var b=document.createElement('button'); b.className='ios-add'; b.type='button'; b.textContent=label;
      b.style.cssText='display:block;width:100%;margin:12px 0;padding:14px;font-size:16px;background:#111827;color:#fff;border:0;border-radius:14px;font-weight:700;position:relative;z-index:20;touch-action:manipulation;';
      b.addEventListener('touchend',function(e){e.preventDefault();fn();},{passive:false});
      b.addEventListener('click',function(e){e.preventDefault();fn();});
      var first=section.querySelector('.sum,.box,.monthnav');
      if(first) section.insertBefore(b,first); else section.appendChild(b);
    }
    addTopButton('contas','＋ ADICIONAR CONTA',function(){window.novo();});
    addTopButton('gasolina','＋ ADICIONAR ABASTECIMENTO',function(){window.novoGas();});
    addTopButton('mercado','＋ ADICIONAR COMPRA',function(){window.novoMercado();});
    var modal=document.getElementById('modal'); if(modal) modal.style.zIndex='9999';
    document.querySelectorAll('button').forEach(function(b){b.style.touchAction='manipulation';b.style.webkitTapHighlightColor='transparent';});
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',setup); else setup();
})();