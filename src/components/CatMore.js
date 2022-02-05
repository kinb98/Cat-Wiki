const CatMore = () => {
  return (
    <div className="catmore">
      <div className="description">
        <div className="why"></div>
        <div className="title">
          <p>Why should you</p>
          <>have a cat ?</>
        </div>
        <p>
          Having a cat around you can actually trigger the the release of
          calming chemicals in your body which lower your stress and anxiety
          leves
        </p>
        <a
          href="https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm"
          target="_blank"
          rel="noreferrer"
        >
          READ MORE
        </a>
      </div>
      <div className="images">
        <div className="image-item">
          <img src="/assets/image 1.png" alt="" width="120" height="120" />
        </div>
        <div className="image-item">
          <img src="/assets/image 2.png" alt="" width="120" height="120" />
        </div>
        <div className="image-item">
          <img src="/assets/image 3.png" alt="" width="120" height="120" />
        </div>
      </div>
    </div>
  );
};

export default CatMore;
