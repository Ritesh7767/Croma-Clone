import React , {useState} from 'react'

const Profile = () => {

    let [userInfo, setUserInfo] = useState({
        title : 'Mr',
        firstName : 'Ritesh',
        middleName : 'Laxman',
        lastName : 'Gupta',
        gender : 'Male',
        contactNumber : 7767823741,
        email : 'ritesh776782@gmail.com',
        dob : '',
        doa : ''
    })

    const handleChange = event => {

        setUserInfo({...userInfo, [event.target.name] : event.target.value})
        return 
    }

    console.log(userInfo)

  return (
    <div className='mt-[20vh] text-white w-[50%] m-auto text-center'>
        <h1 className='text-xl font-bold mb-5 text-start'>My Profile Page</h1>
        <form className='grid grid-flow-row grid-cols-2 gap-x-3 gap-y-7 text-sm text-start '>
            <div className=''>
                <label className='mb-3 inline-block'>Title</label><br />
                {/* <input className='w-full text-[#bab6b6] bg-[#191919] border h-[7vh] rounded-md outline-none pl-6' type="text" onChange={event => handleChange(event)} name='title' value={userInfo.title} /> */}
                <select name="title" id="title" className='w-full text-[#bab6b6] bg-[#191919] border h-[7vh] rounded-md outline-none pl-6 pr-6' onChange={event => handleChange(event)}>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Ms">Ms</option>
                    <option value="Dr">Dr</option>
                    <option value="Prof">Prof</option>
                </select>
            </div>
            <div className=''>
                <label className='mb-3 inline-block'>First Name</label><br />
                <input className='w-full text-[#191919] h-[7vh] rounded-md outline-none pl-6' type="text" onChange={event => handleChange(event)} name='firstName' value={userInfo.firstName} />
            </div>
            <div className=''>
                <label className='mb-3 inline-block'>Middle Name</label><br />
                <input className='w-full text-[#191919] h-[7vh] rounded-md outline-none pl-6' type="text" onChange={event => handleChange(event)} name='middleName' value={userInfo.middleName} />
            </div>
            <div className=''>
                <label className='mb-3 inline-block'>Last Name</label><br />
                <input className='w-full text-[#191919] h-[7vh] rounded-md outline-none pl-6' type="text" onChange={event => handleChange(event)} name='lastName' value={userInfo.lastName} />
            </div>
            <div className='flex justify-start gap-5 col-span-2'>
                <div>

                <input type="radio" className='mr-2 ' name='gender' id='Female' value='female' />
                <label htmlFor="female">Female</label><br />
                </div>
                <div>

                <input type="radio" className='mr-2 ' name='gender' id='male' value='male' />
                <label htmlFor="male">Male</label><br />
                </div>
                <div>

                <input type="radio" className='mr-2 ' name='gender' id='transgender' value='transgender' />
                <label htmlFor="female">Transgender</label><br />
                </div>
                <div>

                <input type="radio" className='mr-2 ' name='gender' id='disclose' value="I'd rather not say" />
                <label htmlFor="disclose">I'd rather not say</label><br />
                </div>
            </div>
            <div className='border-white'>
                <label className='mb-3 inline-block'>Mobile Number</label><br />
                <input required className='w-full text-[#191919] h-[7vh] rounded-md outline-none pl-6' type="number" onChange={event => handleChange(event)} name='contactNumber' value={userInfo.contactNumber} />
            </div>
            <div className=''>
                <label className='mb-3 inline-block'>Email Id</label><br />
                <input required className='w-full text-[#191919] h-[7vh] rounded-md outline-none pl-6' type="email" onChange={event => handleChange(event)} name='email' value={userInfo.email} />
            </div>
            <div className=''>
                <label className='mb-3 inline-block'>Date of Birth</label><br />
                <input className='bg-[#191919] border w-full text-[#bab6b6] h-[7vh] rounded-md outline-none pl-6' type="date" onChange={event => handleChange(event)} name='dob' value={userInfo.dob} />
            </div>
            <div className=''>
                <label className='mb-3 inline-block'>Date of Anniversary</label><br />
                <input className='bg-[#191919] border w-full text-[#bab6b6] h-[7vh] rounded-md outline-none pl-6' type="date" onChange={event => handleChange(event)} name='doa' value={userInfo.doa} />
            </div>
        </form>
        <button className='border text-sm h-[6vh] rounded-md w-[20vh] mt-10 mr-2 font-bold'>Discard Changes</button>
        <button className='text-sm h-[6vh] rounded-md w-[20vh] mt-10 ml-2 font-bold bg-[#12DAA8] text-slate-900'>Save Changes</button>
    </div>
  )
}

export default Profile