import arrow from '../assets/arrow.svg'

const CardData = ({userData,username}) => {
  return (
    <div className='card-container flex justify-center items-center h-[100vh]'>
            <div className='card flex justify-center items-center w-[100vw]'>
                {userData && (
                <div>
                    <div className='name-and-image'>
                        <img 
                        className='w-[240px] rounded-lg'
                        src={userData.avatar_url}
                        alt={`${username}'s avatar`} />
                        <h2 className='italic opacity-20'>@{userData.login}</h2>
                    </div>

                    <p>Name: {userData.name}</p>
                    <p>No. of Public Repos: {userData.public_repos}</p>
                    <p>No. of Public Gists: {userData.public_gists}</p>
                    <p>Profile Created At: {new Date(userData.created_at).toDateString()}</p>
                    <a 
                    target='_blank'
                    href={userData.html_url}>
                        <img
                        className='link-to-profile w-2 mt-2'
                        src={arrow} alt="link to the profile" />
                    </a>
                </div>
                )}
            </div>
        </div>
  )
}

export default CardData