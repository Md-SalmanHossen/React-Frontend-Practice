import Card from "./components/Card";


const App = () => {


  const jobOpenings = [
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hour",
      location: "Redmond, USA"
    },
    {
      brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA"
    },
    {
      brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Mumbai, India"
    }
  ];

  return (
    <div className="flex flex-wrap gap-2 m-2">
      <Card user="Salman" age={23} img='https://scontent.fdac185-1.fna.fbcdn.net/v/t39.30808-6/482222050_2120233975163343_703253092046595580_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEIh0IJ3IyuOyyuL77ndZX5cET232jiLQ9wRPbfaOItD2K4tqH6mKqLelHp2GH1QTTmqEIUryHegcLoHcniCWEp&_nc_ohc=-IrU-ZIAvKkQ7kNvwHFVnLW&_nc_oc=Adl1TRIRJ6f7UQy-LcAvPMeeba80ZmLW1QyoLqgVjOwDkVtydJXs3s0wUEH1HUPwyJ4&_nc_zt=23&_nc_ht=scontent.fdac185-1.fna&_nc_gid=XIS1eP_esKdWD9VPtVqS2w&oh=00_AfmTGTqG6b5yCp7aVINE533BIoM8HfgHAqWLVA0G81oSFQ&oe=6934D2CC'/>
      <Card user="Hossen" age={28} img='https://scontent.fdac185-1.fna.fbcdn.net/v/t39.30808-6/492328101_2159946571192083_1917431399254611030_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEK-NjUgtHP5qJkPLnsElpKxjFBEphnkYjGMUESmGeRiIMIaexAiLWSea6FnnGhbmY8S0K178PUasuLGP6X_oPw&_nc_ohc=nIaffRGOb_wQ7kNvwG0cE2F&_nc_oc=AdmIqlFhTezA8VIm1tCBcdXXFmxGx_EkLF6Bgi9S3dIaj_FgxP171wroO-fbxxesl7Q&_nc_zt=23&_nc_ht=scontent.fdac185-1.fna&_nc_gid=mPfgojNa_-e85HPEgsIHbg&oh=00_Afndt6xgKcnPTauiSguMED65FV1u8tonmvoNjDRmq1Cbgg&oe=69347F94'/>
    </div>
  )
}

export default App;