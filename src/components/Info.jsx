import React from "react";
import "./Info.css";

function Info() {
  return (
    <div>
      <div className="tapName">
        <h3>Code Chrysalis Japan</h3>
        <p>東京都港区元麻布3-1-35VORT元麻布地下2階</p>
      </div>
      <div className="aveRate">
        <p>★5.0</p>
      </div>
      <div>
        <img src="" alt="photos" />
      </div>
      <div className="info">
        <section>
          給水可能時間：
          <div className="time">
            月曜日から金曜日10:00-17:00 (土曜日と日曜日は休業)
          </div>
        </section>
        <section>
          給水方法：
          <div className="howto">スタッフにお声かけください。</div>
        </section>
        <section>
          水の種類：
          <div className="type">
            水道水・水道水（冷）・浄水・お湯
            <br />
            浄水/ろ過水、お湯/お湯
          </div>
        </section>
        <section>
          アクセス：
          <div className="access">VORT元麻布ビルのB2。</div>
        </section>
      </div>
      <div>
        <button className="info-button">経路</button>
        <button className="info-button">給水を記録</button>
      </div>
    </div>
  );
}

export default Info;
