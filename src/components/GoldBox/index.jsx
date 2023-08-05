import "./gold-box.scss";
import box3 from '../../assets/images/box3.png'

const GoldBox = () => {
  return (
    <div className="goldBox d-flex">
      <div className="goldBox__left">
        <h2>Золотой сундук</h2>
        <p className="desc">Из этого сундука вы можете получить один из следующих призов:</p>
        <table>
          <tr>
            <td>Очки в турнире</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Очки в турнире</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Очки в турнире</td>
            <td>4</td>
          </tr>
          <tr>
            <td>FreeBet</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>FreeBet</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>FreeBet</td>
            <td>3000</td>
          </tr>
        </table>
        <p className="importantBlock">
          ВАЖНО - если вы выполнили квест - успейте открыть сундук и забрать
          награду до окончания акции
        </p>
      </div>
      <div className="goldBox__right">
        <img src={box3} alt="" width="407" />
      </div>
    </div>
  );
};

export default GoldBox;
