const aTag = document.createElement("a");
  aTag.href = null
  aTag.download = "AsmPartsSetup"

function clicked(){
  try{
    document.body.appendChild(aTag);
    aTag.click();
  }catch(e){
    alert(`ダウンロードに失敗しました。
    メッセージは以下の通りです。
    ${e.message}`)
  }
}
