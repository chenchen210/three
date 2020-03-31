$(function(){
    console.log(22222);
    var e=$("#main");
    return new Handsontable(
        e.get(0),
        {
            data:[
                ["Java","1","降","-0.01%"],
                ["C","2","升","+2.44%"],
                ["Python","3","升","+1.14%"],
                ["C++","4","降","-2.58%"],
                ["C#","5","升","+2.07%"],
                ["VisuaiBasic.NET","6","降","-1.17%"],
                ["JavaScript","7","降","-0.85%"]
            ],
            colHeaders:["语言名称","排名","升或降","变化幅度"]
        }
    )
});