import s from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={s.profileCard}>
      <div className={s.personInfo}>
        <img src={avatar} alt="User avatar" width="200" className={s.avatar} />
        <h2 className={s.name}>{name}</h2>
        <p className={s.tag}>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
