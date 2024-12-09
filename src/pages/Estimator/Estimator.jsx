import React, { useState, useEffect } from 'react';
import './Estimator.css';

const Estimator = () => {
  const [sizes, setSizes] = useState(1);
  const [flavors, setFlavors] = useState(1);
  const [varieties, setVarieties] = useState(1);
  const [otherVariations, setOtherVariations] = useState(1);
  const [totalGTINs, setTotalGTINs] = useState(81);

  useEffect(() => {
    const calculateGTINs = () => {
      const result = sizes * flavors * varieties * otherVariations;
      setTotalGTINs(result);
    };
    calculateGTINs();
  }, [sizes, flavors, varieties, otherVariations]);

  return (
    <div className="estimator-wrapper">
      <div className="Agriculture3-banner">
        <div className="banner2-content">
          <h1>Barcode Estimator</h1>
        </div>
      </div>
      <div className="gtin-estimator">

        <h1>Not sure how many GTINs you're going to need? Use our GTIN Estimator to quickly figure it out!</h1>
        {/* <h2>{totalGTINs} GTINs/Barcodes needed</h2> */}
        <p className="disclaimer">Sample representation only. The number of GTINs required will vary depending on your business' needs.</p>
        <p className="disclaimer">If you are selling your products at the pack or case level, you may require additional GTINs.</p>

        <div className="estimator-content">
          <div className="left-panel">
            <table>
              <tbody>
                <tr className="header-row">
                  <td colSpan="3">{sizes} Sizes</td>
                  <td className="result">{sizes}</td>
                </tr>
                <tr>
                  <td>250 ml</td>
                  <td>700 ml</td>
                  <td>1 Liter</td>
                  <td rowSpan="2" className="multiply">x</td>
                </tr>
                <tr className="header-row">
                  <td colSpan="3">{flavors} Flavours</td>
                  <td className="result">{flavors}</td>
                </tr>
                <tr>
                  <td>🍑</td>
                  <td>🍓</td>
                  <td>🍇</td>
                  <td rowSpan="2" className="multiply">x</td>
                </tr>
                <tr className="header-row">
                  <td colSpan="3">{varieties} Specialties</td>
                  <td className="result">{varieties}</td>
                </tr>
                <tr>
                  <td>Lactose-free</td>
                  <td>High Protein</td>
                  <td>Fat-free</td>
                  <td rowSpan="2" className="multiply">x</td>
                </tr>
                <tr className="header-row">
                  <td colSpan="3">3 Packages</td>
                  <td className="result">{totalGTINs}</td>
                </tr>
                <tr>
                  <td>🥛</td>
                  <td>🥛</td>
                  <td>🥛🥛🥛</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="right-panel">
            <div className="input-section">
              <h3>Item Description:</h3>
              <textarea rows="4" cols="50"></textarea>
              <div className="input-group">
                <label>Sizes:</label>
                <input type="number" value={sizes} onChange={(e) => setSizes(Number(e.target.value))} />
              </div>
              <div className="input-group">
                <label>Colours/flavours:</label>
                <input type="number" value={flavors} onChange={(e) => setFlavors(Number(e.target.value))} />
              </div>
              <div className="input-group">
                <label>Styles/Varieties:</label>
                <input type="number" value={varieties} onChange={(e) => setVarieties(Number(e.target.value))} />
              </div>
              <div className="input-group">
                <label>Other Variations:</label>
                <input type="number" value={otherVariations} onChange={(e) => setOtherVariations(Number(e.target.value))} />
              </div>
            </div>
            <div className="total-gtins">
              <h3>Total GTINs required:</h3>
              <div className="total-value">{totalGTINs}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estimator;