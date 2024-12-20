import React, { useState, useEffect } from 'react';
import './Estimator.css';

const Estimator = () => {
  const [sizes, setSizes] = useState(1);
  const [flavors, setFlavors] = useState(1);
  const [varieties, setVarieties] = useState(1);
  const [otherVariations, setOtherVariations] = useState(1);
  const [totalGTINs, setTotalGTINs] = useState(81);
  const [products, setProducts] = useState("");
  const [category, setCategory] = useState("general");
  const [result, setResult] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const calculateGTINs = () => {
      const result = sizes * flavors * varieties * otherVariations;
      setTotalGTINs(result);
    };
    calculateGTINs();
  }, [sizes, flavors, varieties, otherVariations]);

  const handleClear = () => {
    setProducts("");
    setCategory("general");
    setResult("");
    setShowPopup(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = () => {
    const productNumber = parseInt(products, 10);

    if (category === "general" || category === "textile") {
      if (productNumber > 10000) {
        setShowPopup(true);
        return;
      }
    } else if (category === "health care" || category === "UDI") {
      if (productNumber > 1000) {
        setShowPopup(true);
        return;
      }
    }

    let recommendation = "";
    if (category === "general") {
      if (productNumber === 1) {
        recommendation = "General Category\n\nRecommendation: License 1 GLN\nEntrance Fee: Rs 22,695 (incl. Govt. Taxes)\nAnnual Fee: Rs 7,566 (incl. Govt. Taxes)\nTotal Fees: Rs 30,261";
      } else if (productNumber <= 10) {
        recommendation = "General Category\n\nRecommendation: License 10 GTIN-13s\nEntrance Fee: Rs 22,695 (incl. Govt. Taxes)\nAnnual Fee: Rs 7,566 (incl. Govt. Taxes)\nTotal Fees: Rs 30,261";
      } else if (productNumber <= 100) {
        recommendation = "General Category\n\nRecommendation: License 100 GTIN-13s\nEntrance Fee: Rs 45,392 (incl. Govt. Taxes)\nAnnual Fee: Rs 12,105 (incl. Govt. Taxes)\nTotal Fees: Rs 57,497";
      } else if (productNumber <= 300) {
        recommendation = "General Category\n\nRecommendation: License 300 GTIN-13s\nEntrance Fee: Rs 45,392 (incl. Govt. Taxes)\nAnnual Fee: Rs 15,131 (incl. Govt. Taxes)\nTotal Fees: Rs 60,523";
      } else if (productNumber <= 500) {
        recommendation = "General Category\n\nRecommendation: License 500 GTIN-13s\nEntrance Fee: Rs 45,392 (incl. Govt. Taxes)\nAnnual Fee: Rs 22,695 (incl. Govt. Taxes)\nTotal Fees: Rs 68,087";
      } else if (productNumber <= 1000) {
        recommendation = "General Category\n\nRecommendation: License 1,000 GTIN-13s\nEntrance Fee: Rs 45,392 (incl. Govt. Taxes)\nAnnual Fee: Rs 30,261 (incl. Govt. Taxes)\nTotal Fees: Rs 75,653";
      } else if (productNumber <= 10000) {
        recommendation = "General Category\n\nRecommendation: License 10,000 GTIN-13s\nEntrance Fee: Rs 45,392 (incl. Govt. Taxes)\nAnnual Fee: Rs 180,959 (incl. Govt. Taxes)\nTotal Fees: Rs 226,351";
      }
    } else if (category === "health care") {
      if (productNumber === 1) {
        recommendation = "Healthcare Category\n\nRecommendation: License 1 GTIN-13s/GLN\nEntrance Fee: Rs 34,044 (incl. Govt. Taxes)\nAnnual Fee: Rs 11,348 (incl. Govt. Taxes)\nTotal Fees: Rs 45,392";
      } else if (productNumber <= 10) {
        recommendation = "Healthcare Category\n\nRecommendation: License 10 GTIN-14s\nEntrance Fee: Rs 34,044 (incl. Govt. Taxes)\nAnnual Fee: Rs 11,348 (incl. Govt. Taxes)\nTotal Fees: Rs 45,392";
      } else if (productNumber <= 100) {
        recommendation = "Healthcare Category\n\nRecommendation: License 100 GTIN-14s\nEntrance Fee: Rs 68,087 (incl. Govt. Taxes)\nAnnual Fee: Rs 18,156 (incl. Govt. Taxes)\nTotal Fees: Rs 86,243";
      } else if (productNumber <= 300) {
        recommendation = "Healthcare Category\n\nRecommendation: License 300 GTIN-14s\nEntrance Fee: Rs 68,087 (incl. Govt. Taxes)\nAnnual Fee: Rs 22,695 (incl. Govt. Taxes)\nTotal Fees: Rs 90,782";
      } else if (productNumber <= 500) {
        recommendation = "Healthcare Category\n\nRecommendation: License 500 GTIN-14s\nEntrance Fee: Rs 68,087 (incl. Govt. Taxes)\nAnnual Fee: Rs 34,044 (incl. Govt. Taxes)\nTotal Fees: Rs 102,131";
      } else if (productNumber <= 1000) {
        recommendation = "Healthcare Category\n\nRecommendation: License 1,000 GTIN-14s\nEntrance Fee: Rs 68,087 (incl. Govt. Taxes)\nAnnual Fee: Rs 45,392 (incl. Govt. Taxes)\nTotal Fees: Rs 113,479";
      }
    } else if (category === "UDI") {
      if (productNumber === 1) {
        recommendation = "UDI Category\n\nRecommendation: License 1 GLN/GTIN-13s\nEntrance Fee: Rs 34,044 (incl. Govt. Taxes)\nThree-Year Fee: Rs 34,043 (incl. Govt. Taxes)\nTotal Fees: Rs 68,087";
      } else if (productNumber <= 100) {
        recommendation = "UDI Category\n\nRecommendation: License 100 GTIN-14s\nEntrance Fee: Rs 68,087 (incl. Govt. Taxes)\nThree-Year Fee: Rs 54,468 (incl. Govt. Taxes)\nTotal Fees: Rs 122,555";
      } else if (productNumber <= 300) {
        recommendation = "UDI Category\n\nRecommendation: License 300 GTIN-14s\nEntrance Fee: Rs 68,087 (incl. Govt. Taxes)\nThree-Year Fee: Rs 68,086 (incl. Govt. Taxes)\nTotal Fees: Rs 136,173";
      } else if (productNumber <= 500) {
        recommendation = "UDI Category\n\nRecommendation: License 500 GTIN-14s\nEntrance Fee: Rs 68,087 (incl. Govt. Taxes)\nThree-Year Fee: Rs 102,132 (incl. Govt. Taxes)\nTotal Fees: Rs 170,199";
      } else if (productNumber <= 1000) {
        recommendation = "UDI Category\n\nRecommendation: License 1,000 GTIN-13s\nEntrance Fee: Rs 68,087 (incl. Govt. Taxes)\nThree-Year Fee: Rs 136,175 (incl. Govt. Taxes)\nTotal Fees: Rs 204,262";
      }
    } else if (category === "Verification 1D") {
      if (productNumber <= 10) {
        recommendation = "Verification 1D\n\nBarcode Verification Fees of 1D\nEAN - 13's Verification Fees: License 1 - 10 GTIN\nTotal Fees: Rs 907";
      } else if (productNumber > 10) {
        recommendation = "Verification 1D\n\nBarcode Verification Fees of 1D\nEAN - 13's Verification Fees: License Above 10 GTIN\nTotal Fees: Rs 756";
      }
    } else if (category === "Verification 2D (Data Matrix)") {
      if (productNumber <= 10) {
        recommendation = "Verification 2D (Data Matrix)\n\nBarcode Verification Fees of 2D (Data Matrix)\n2D Data Matrix - 14's Verification Fees: License 1 - 10 GTIN\nTotal Fees: Rs 1,665";
      } else if (productNumber > 10) {
        recommendation = "Verification 2D (Data Matrix)\n\nBarcode Verification Fees of 2D (Data Matrix)\n2D Data Matrix - 14's Verification Fees: License Above 10 GTIN\nTotal Fees: Rs 1,513";
      }
    } else if (category === "UDI Verification 1D") {
      if (productNumber <= 10) {
        recommendation = "UDI Verification 1D\n\nBarcode Verification Fees of 1D UDI -14's\nEAN - 13's Verification Fees: License 1 - 10 GTIN (Per GTIN's)\nTotal Fees: Rs 870";
      } else if (productNumber > 10) {
        recommendation = "UDI Verification 1D\n\nBarcode Verification Fees of 1D UDI -14's\nEAN - 13's Verification Fees: License Above 10 GTIN (Per GTIN's)\nTotal Fees: Rs 812";
      }
    } else if (category === "UDI Verification 2D (Data Matrix)") {
      if (productNumber <= 10) {
        recommendation = "UDI Verification 2D (Data Matrix)\n\nBarcode Verification Fees of 2D (Data Matrix)\n2D Data Matrix - 14's Verification Fees: License 1 - 10 GTIN\nTotal Fees: Rs 1,387";
      } else if (productNumber > 10) {
        recommendation = "UDI Verification 2D (Data Matrix)\n\nBarcode Verification Fees of 2D (Data Matrix)\n2D Data Matrix - 14's Verification Fees: License Above 10 GTIN\nTotal Fees: Rs 1,261";
      }
    }

    setResult(recommendation);
  };
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
            <div className="calculator-container">
      <div className="calculator-form">
        <h1 className="calculator-title">Check Your Barcode & Verification Fees!</h1>
        <p className="calculator-subtitle">Any Company applying for GTIN/GLN-13, barcode numbers will be required to pay the following Entrance and Annual Fees along with the GS1 Pakistan Standard Application Form duly completed.</p>
        <label>
          Please Indicate Below the Number of Global Trade Item Numbers (GTIN's) You Require: 
          <input
            type="number"
            value={products}
            onChange={(e) => setProducts(e.target.value)}
            placeholder="Enter the number of products"
          />
        </label>
        <label>
          Product category that best identifies your business:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="general">General</option>
            <option value="health care">Healthcare</option>
            <option value="UDI">UDI</option>
            <option value="Verification 1D">Healthcare Verification 1D</option>
            <option value="Verification 2D (Data Matrix)">Healthcare Verification 2D (Data Matrix)</option>
            <option value="UDI Verification 1D">UDI Verification 1D</option>
            <option value="UDI Verification 2D (Data Matrix)">UDI Verification 2D (Data Matrix)</option>
          </select>
        </label>
      </div>

      <div className="calculator-actions">
        <button onClick={handleSubmit}>Check Fees</button>
        <button onClick={handleClear}>Clear Values</button>
        <button onClick={() => window.open("https://www.gs1pk.org/Getabarcode", "_blank")}>Get a Barcode</button>
      </div>

      {result && <div className="calculator-result">{result}</div>}

      <div className="terms-section">
        <h3 className="terms-title">Terms and Conditions</h3>
        <p className="terms-content">
          1. Annual fees are due one calendar year from the allocation date.<br />
          2. From the second year onward, companies are required to pay the annual renewal fee.<br />
          3. A late fee charge of <strong>5%</strong> will be applied to the total invoice amount after the due date.<br />
          4. You must pay the Membership Fee to GS1 annually within<strong> 30 days </strong> of the date of GS1's invoice.<br />
          5. GS1 may, from time to time, increase the Membership Fee.<br />
          6. GS1 Pakistan may terminate the License immediately by giving notice if You fail to pay the Membership Fee by its due date.
        </p>
      </div>

      {showPopup && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">Please Contact </h2>
            <p className="modal-text">The number of products entered exceeds. For assistance, call <strong>021-32215844, +92-312-0003997, or +92-322-2251704,</strong> or email at <strong>info@gs1pk.org</strong></p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estimator;