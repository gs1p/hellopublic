import React from "react";
import "./BarcodeGuide.css"; // You'll need to create this CSS file

const BarcodeGuide = () => {
  return (
    <><div className="about-us-container">
      <div className="overlay1"></div>
      <div className="content-wrapper">
        <h1>Barcode Guide</h1>
        <h2>How to place barcodes on products?</h2>
      </div>
    </div>
      <div className="barcode-guide">
        <div className="content-guide">
          <div className="barcode-image">
            <img src="https://assets.gs1us.org/is/image/gsoneus/simple-barcode-illustration?ts=1710857572304&dpr=off"></img>
            {/* <div className="barcode-placeholder"></div> */}
          </div>

          <div className="barcode-info">
            <h2>Creating the Barcodes</h2>
            <p>
              The quality of your barcode is critical for a successful scan. Your
              barcode could look great on the package and be formatted perfectly;
              but if it fails to scan, it may require manual keying of the GTIN*
              and could potentially lead to lost sales and market share from
              customers at checkout. You may also have additional expenses from
              retailer charge-backs.
            </p>
            <p>
              You need to use high-resolution artwork and high-resolution
              printing. Using both means that the lines and spaces in your barcode
              are clean and readable. To create high-resolution art for an actual
              barcode digital file yourself, use Activate, an
              online resource for GS1 PK Company Prefix holders. You can use this
              art to print your labels yourself or send it to a barcode label
              printer or your package label vendor. You can also turn to a GS1 PK
              Solution Provider for your barcode art and printing needs. These
              providers are trained by GS1 PK* on GS1 Standards for barcodes.
            </p>
          </div>
        </div>
        <div className="content-guide">
          <div className="barcode-image">
            <img src="https://assets.gs1us.org/is/image/gsoneus/place-barcodes-colors-illustration?ts=1710857569467&dpr=off"></img>
            {/* <div className="barcode-placeholder"></div> */}
          </div>

          <div className="barcode-info">
            <h2>Selecting Colors</h2>
            <p>
              The best color combination for a barcode is black bars with a white
              background (spaces and quiet zones). If you want to use other
              colors, follow these guidelines:
            </p>
            <h4>Bars</h4>
            <div className="barcode-tips">
              <ul>
                <li>
                  GS1 barcodes require dark colors for bars (e.g., black, dark
                  blue, or dark green)
                </li>
                <li>
                  Avoid printing the bars in red, or in a reddish color, like
                  brown. This is because scanning lasers use red light, and red
                  bars are "invisible" to the scanner's red light
                </li>
                <li>
                  Print the bars in a single ink color—avoid printing them with
                  four-color process or other multiple-color process
                </li>
              </ul>
            </div>
            <h4>background</h4>
            <div className="barcode-tips">
              <ul>
                <li>
                  GS1 barcodes require light backgrounds for the quiet zones and
                  spaces
                </li>
                <li>
                  In addition to light backgrounds, you can also use “reddish”
                  backgrounds since the scanner light is red and cannot read the
                  red background
                </li>
                <li>
                  Typically you would not print the symbol background. In this
                  case, the background is the color of the label, package, or
                  package contents (if the package is clear). Be sure to follow
                  the rules below for the background color
                </li>
              </ul>
            </div>
            <h4>If You Do Print the Background:</h4>
            <div className="barcode-tips">
              <ul>
                <li>
                  If you use multiple layers of ink to increase the background
                  opacity, print each layer as a solid
                </li>
                <li>
                  If you use a fine screen to deliver more ink to the background,
                  be sure there are no voids in the print caused by the screen not
                  adequately filling in
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content-guide">
          <div className="barcode-image">
            <img src="https://assets.gs1us.org/is/image/gsoneus/barcode-placement-illustration?ts=1710857568845&dpr=off"></img>
            {/* <div className="barcode-placeholder"></div> */}
          </div>

          <div className="barcode-info">
            <h2>Placement on Packaging</h2>
            <p>
              Where you put the barcode on your package can impact the ability of
              scanners to read your barcode. In general, for an item scanned at
              checkout, you would put the barcode in the lower right-hand section
              of the back of the package. Avoid the edge of the package, and allow
              enough white space surrounding the barcode to help to ensure a clean
              scan. It’s also critical that the printed surface be smooth so
              nothing interferes with the scanner’s ability to read the barcode.
            </p>
            <p>
              There are other guidelines for bagged items, large/bulky items,
              curved items, tags, and non-packaged items for checkout in addition
              to guidelines for items scanned in warehouses or distribution
              centers. For details on guidelines for barcode placement, including
              illustrations with do’s and don’ts, read the Guidelines for Barcode
              Symbol Placement.
            </p>
          </div>
        </div>
        <div className="content-guide">
          <div className="barcode-image">
            <img src="https://assets.gs1us.org/is/image/gsoneus/barcode-sizing-illustration?ts=1710857571964&dpr=off"></img>
            {/* <div className="barcode-placeholder"></div> */}
          </div>

          <div className="barcode-info">
            <h2>Selecting the Barcode Size</h2>
            <p>
              The size of the barcode within the package design will depend on
              where you will use the barcode and how you will print the barcode.
              U.P.C. barcodes have a fixed relationship between barcode height and
              width. When one dimension is modified, the other dimension must be
              altered by a proportional amount.
            </p>
            <p>
              It’s best to print barcodes at their full height and not remove
              portions to make it fit on the packaging (this is called truncation)
              since this could result in incorrect scanning. Also, leave a clear,
              unprinted area on the left and right sides of the barcode (known as
              the quiet zone). Create your barcode art in the size you’ll need for
              your packaging. If you need to change the size of the barcode art,
              do not shrink or enlarge it - it may not scan correctly. If you need
              to resize the barcode art, just re-create the barcode in the desired
              size.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarcodeGuide;
