

const App = () => {
  return (
    <div className="flex flex-wrap gap-2 m-2">
      <div className="text-center w-65 h-80 text-white bg-black p-10 border-2 rounded-lg shadow-xl">
        <img 
          className="rounded-full w-24 h-24 mx-auto mb-4 object-cover" 
          src="https://scontent.fdac185-1.fna.fbcdn.net/v/t39.30808-6/492328101_2159946571192083_1917431399254611030_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEK-NjUgtHP5qJkPLnsElpKxjFBEphnkYjGMUESmGeRiIMIaexAiLWSea6FnnGhbmY8S0K178PUasuLGP6X_oPw&_nc_ohc=nIaffRGOb_wQ7kNvwG0cE2F&_nc_oc=AdmIqlFhTezA8VIm1tCBcdXXFmxGx_EkLF6Bgi9S3dIaj_FgxP171wroO-fbxxesl7Q&_nc_zt=23&_nc_ht=scontent.fdac185-1.fna&_nc_gid=mPfgojNa_-e85HPEgsIHbg&oh=00_Afndt6xgKcnPTauiSguMED65FV1u8tonmvoNjDRmq1Cbgg&oe=69347F94" 
          alt="Profile Picture of Salman Hossen" 
        />
        <h1 className="font-bold text-2xl">Salman Hossen</h1>
        <p className="text-sm gap-y-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, molestiae.</p>
        <button className="border p-2 rounded-lg bg-white text-black mt-4 cursor-pointer"> 
          View Profile
        </button>
      </div>
    </div>
  )
}

export default App;