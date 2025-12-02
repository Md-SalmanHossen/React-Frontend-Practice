import Card from "./components/Card";


const App = () => {
  return (
    <div className="flex flex-wrap gap-2 m-2">
      <Card user="Salman" age={23} img='https://scontent.fdac185-1.fna.fbcdn.net/v/t39.30808-6/482222050_2120233975163343_703253092046595580_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEIh0IJ3IyuOyyuL77ndZX5cET232jiLQ9wRPbfaOItD2K4tqH6mKqLelHp2GH1QTTmqEIUryHegcLoHcniCWEp&_nc_ohc=-IrU-ZIAvKkQ7kNvwHFVnLW&_nc_oc=Adl1TRIRJ6f7UQy-LcAvPMeeba80ZmLW1QyoLqgVjOwDkVtydJXs3s0wUEH1HUPwyJ4&_nc_zt=23&_nc_ht=scontent.fdac185-1.fna&_nc_gid=XIS1eP_esKdWD9VPtVqS2w&oh=00_AfmTGTqG6b5yCp7aVINE533BIoM8HfgHAqWLVA0G81oSFQ&oe=6934D2CC'/>
      <Card user="Hossen" age={28} img='https://scontent.fdac185-1.fna.fbcdn.net/v/t39.30808-6/492328101_2159946571192083_1917431399254611030_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEK-NjUgtHP5qJkPLnsElpKxjFBEphnkYjGMUESmGeRiIMIaexAiLWSea6FnnGhbmY8S0K178PUasuLGP6X_oPw&_nc_ohc=nIaffRGOb_wQ7kNvwG0cE2F&_nc_oc=AdmIqlFhTezA8VIm1tCBcdXXFmxGx_EkLF6Bgi9S3dIaj_FgxP171wroO-fbxxesl7Q&_nc_zt=23&_nc_ht=scontent.fdac185-1.fna&_nc_gid=mPfgojNa_-e85HPEgsIHbg&oh=00_Afndt6xgKcnPTauiSguMED65FV1u8tonmvoNjDRmq1Cbgg&oe=69347F94'/>
    </div>
  )
}

export default App;