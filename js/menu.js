
let parenCats = document.querySelector('.category')
let continerForCategory = document.querySelector('.continer')





function selectCategory(event) {
    let allCategory = document.querySelectorAll('#category')
    
    allCategory.forEach(function (paramis) {
        paramis.style.backgroundColor = '#474747'
        paramis.style.borderColor = 'white'

    })
    event.target.style.backgroundColor = '#ff4747'
    event.target.style.borderColor = '#ff4747'
    
    
}



function run() {

    category.forEach(function (cate) {
        parenCats.insertAdjacentHTML('beforeend','<div onclick="selectCategory(event)" id="category" style="border: 1px solid white;color: white;font-weight: bold;padding-bottom: 8px; border-radius: 25px;padding-left: 12px;padding-right: 12px;padding-top: 4px; margin: 8px;white-space: nowrap;flex-shrink:0;">'+cate+'</div>')
        continerForCategory.insertAdjacentHTML('beforeend','<div  class="item relative w-[92%] bg-[#474747] mt-5 flex-col flex items-center"><div style="border: .2px solid white;z-index: 10; margin-top: 2vh;width: 90%;position: absolute;margin-top: 3.8vh;"></div><div class="text-center z-50 px-2 text-[#ff4747] text-xl mt-[2vh]  bg-[#474747] ">'+cate+'</div><div class="w-[90%] mt-[3vh] flex flex-col items-center " style="padding-bottom:30px;" id="'+cate+'"></div></div>')
    })

    ////////////////////////////////////////////////////////////////////////////////////قهوه بر پایه اسپرسو

    let ghahveBarPayeEspersoElem = document.getElementById('قهوه بر پایه اسپرسو')

    ghahveBarPayeEsperso.forEach(function (params) {

        ghahveBarPayeEspersoElem.insertAdjacentHTML('beforeend','<div class="w-[90%] mb-1 text-sm text-gray-200  h-[2vh] flex justify-between" style="white-space:nowrap;"><div class="bg-[#474747] px-2">'+params.name+'</div><div style="border-bottom: 1px solid white;width: 80%;"></div><div class="bg-[#474747] px-1 ">'+params.price+'</div></div><div class="text-gray-400 text-right w-[90%] mr-5 mb-3 text-xs">'+params.about+'</div>')
        
    })
    //////////////////////////////////////////////////////////////////////////////قهوه دمی

    let ghahveDameElem = document.getElementById('قهوه دمی')

    ghahveDame.forEach(function (params) {

        ghahveDameElem.insertAdjacentHTML('beforeend','<div class="w-[90%] mb-1 text-sm text-gray-200  h-[2vh] flex justify-between" style="white-space:nowrap;"><div class="bg-[#474747] px-2">'+params.name+'</div><div style="border-bottom: 1px solid white;width: 80%;"></div><div class="bg-[#474747] px-1 ">'+params.price+'</div></div><div class="text-gray-400 text-right w-[90%] mr-5 mb-3 text-xs">'+params.about+'</div>')
        
    })

    /////////////////////////////////////////////////////////////////////////نوشیدنی گرم

    let noshidaniGharmeElem = document.getElementById('نوشیدنی گرم')
    noshidaniGharme.forEach(function (params) {

        noshidaniGharmeElem.insertAdjacentHTML('beforeend','<div class="w-[90%] mb-1 text-sm text-gray-200  h-[2vh] flex justify-between" style="white-space:nowrap;"><div class="bg-[#474747] px-2">'+params.name+'</div><div style="border-bottom: 1px solid white;width: 80%;"></div><div class="bg-[#474747] px-1 ">'+params.price+'</div></div><div class="text-gray-400 text-right w-[90%] mr-5 mb-3 text-xs">'+params.about+'</div>')
        
    })

    /////////////////////////////////////////////////////////////////////////قهوه سرد بر پایه اسپرسو

    let ghahveSardeBarPayeEspersoElem =document.getElementById('قهوه سرد بر پایه اسپرسو')
    ghahveSardeBarPayeEsperso.forEach(function (params) {

        ghahveSardeBarPayeEspersoElem.insertAdjacentHTML('beforeend','<div class="w-[90%] mb-1 text-sm text-gray-200  h-[2vh] flex justify-between" style="white-space:nowrap;"><div class="bg-[#474747] px-2">'+params.name+'</div><div style="border-bottom: 1px solid white;width: 80%;"></div><div class="bg-[#474747] px-1 ">'+params.price+'</div></div><div class="text-gray-400 text-right w-[90%] mr-5 mb-3 text-xs">'+params.about+'</div>')
        
    })

    /////////////////////////////////////////////////////////////////////////////شیک

    let shakeElem =document.getElementById('شیک ها')

    shake.forEach(function (params) {

    shakeElem.insertAdjacentHTML('beforeend','<div class="w-[90%] mb-1 text-sm text-gray-200  h-[2vh] flex justify-between" style="white-space:nowrap;"><div class="bg-[#474747] px-2">'+params.name+'</div><div style="border-bottom: 1px solid white;width: 80%;"></div><div class="bg-[#474747] px-1 ">'+params.price+'</div></div><div class="text-gray-400 text-right w-[90%] mr-5 mb-3 text-xs">'+params.about+'</div>')
        
    })

    ///////////////////////////////////////////////////////////////////////////ماکتل

    let maktelElem =document.getElementById('ماکتل')

    maktel.forEach(function (params) {

        maktelElem.insertAdjacentHTML('beforeend','<div class="w-[90%] mb-1 text-sm text-gray-200  h-[2vh] flex justify-between" style="white-space:nowrap;"><div class="bg-[#474747] px-2">'+params.name+'</div><div style="border-bottom: 1px solid white;width: 80%;"></div><div class="bg-[#474747] px-1 ">'+params.price+'</div></div><div class="text-gray-400 text-right w-[90%] mr-5 mb-3 text-xs">'+params.about+'</div>')
            
    })

}
run()