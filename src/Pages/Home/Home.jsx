import Counter from "../../Components/Global/Counter";
import img1 from "../../Images/group-diverse-people-having-business-meeting 2.png";
import img2 from "../../Images/teamwork-strategy-lead-business-success-generated-by-ai 1.png";

const Home = () => {
return ( 
  <div className="container-fluid">
  <div className="main mb-4">
    <div className="card bg-primary text-white">
      <img src={img1} className="card-img" alt="..." />
      <div className="card-img-overlay">
      <div className="content">
        <h2 className="title1 text-white text-uppercase" style={{fontFamily: 'ZCOOL XiaoWei, sans-serif'}}>Charter Accountants <span className="text-primary d-block"><span className='text-white'>&</span> Tax Experts</span></h2>
        <p className="p-content-main lh-sm my-5 pb-3">general professional partnership of Certified Public Accountants with strong 
          academic credentials and professional experience. Our commitment is not 
          just to provide high-level, impactful, and dependable professional services, 
          but also to promote highly responsive client relationship.</p>
        <button className="btnmain btn1 bg-primary me-3">Request A Service</button>
        <button className="btnmain btn2 bg-transparent text-primary" style={{width:"220px"}}>learn more</button>
    </div>
  </div>
    </div>
</div>
<div className="container-our-value w-100" style={{fontFamily: 'ZCOOL XiaoWei, sans-serif'}}>
  <div className="rate-our-values m-auto d-flex justify-content-around mb-5 border-secondary-subtle rounded-4">
    <div className="rate-one text-lg-center">
     <Counter endValue={30} name={"Years of Experience"} />
     <Counter endValue={50} name={"Years of Experience"} />
     <Counter endValue={100} name={"Years of Experience"} />
    </div>
  </div>

</div>
</div>
     );
}
 
export default Home;