import qrCode from "../assets/qrcode.png";

const QRCode: React.FC = () => {
  return (
    <section className="card mx-auto lg:w-2/3 lg:shadow-lg p-10">
      <h1 className="text-3xl font-bold text-info mb-3">QR Code</h1>
      <p className="mb-10">
        You can use this QR code to <strong>check-in</strong> at your clinic
        after being dropped off!
      </p>

      <img src={qrCode} className="lg:max-w-lg lg:block mx-auto rounded" />
    </section>
  );
};

export default QRCode;
