import React from "react";

const PassportDemo = () => {
  const passportData = {
    country: "AUSTRALIA",
    documentNo: "PU1254123",
    type: "P",
    issuingCode: "AUS",
    surname: "ERUVA",
    givenName: "LAOIA",
    nationality: "AUSTRALIAN",
    dob: "15 DEC 1994",
    sex: "F",
    issueDate: "14 MAR 2021",
    expiryDate: "27 MAR 2032",
    authority: "AUSTRALIA",
    birthPlace: "PEEKSKILL",
    mrz1: "P<AUSERUVA<<LAOIA<<<<<<<<<<<<<<<<<<<<<<<",
    mrz2: "PU12541235AUS9412158F3203271<<<<<<<<<<<<00",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    signature: "Erura",
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-5">
      <div
        className="w-[1000px] h-[700px] rounded-3xl shadow-2xl overflow-hidden relative border border-gray-400"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
          backgroundSize: "cover",
        }}
      >
        {/* Top Section */}
        <div className="px-8 pt-8">
          <div className="flex justify-between items-start">
            {/* Left */}
            <h1 className="text-[#00738B] text-5xl font-bold uppercase tracking-wide">
              Titre De Voyage
            </h1>

            {/* Center */}
            <div className="text-center">
              <h2 className="text-[#00738B] text-6xl font-bold uppercase">
                {passportData.country}
              </h2>
            </div>

            {/* Right */}
            <div className="text-right">
              <p className="text-[#00738B] text-2xl font-bold uppercase">
                Document No.
              </p>

              <h3 className="text-5xl tracking-[6px] mt-2 font-mono">
                {passportData.documentNo}
              </h3>
            </div>
          </div>

          {/* Main Body */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="w-[260px] h-[340px] rounded-[35px] overflow-hidden bg-gray-300 border border-gray-400">
                <img
                  src={passportData.photo}
                  alt="passport"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Information */}
            <div className="col-span-2 space-y-2">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-[#00738B] font-bold text-xl">
                    Type / Type
                  </p>

                  <h3 className="text-4xl">{passportData.type}</h3>
                </div>

                <div>
                  <p className="text-[#00738B] font-bold text-xl">
                    Code of issuing / Code de l'Etat émetteur
                  </p>

                  <h3 className="text-4xl">{passportData.issuingCode}</h3>
                </div>
              </div>

              <div>
                <p className="text-[#00738B] font-bold text-xl">
                  Name / Nom
                </p>

                <h3 className="text-5xl uppercase tracking-wide">
                  {passportData.surname}
                </h3>
              </div>

              <div>
                <h3 className="text-5xl uppercase tracking-wide">
                  {passportData.givenName}
                </h3>
              </div>

              <div>
                <p className="text-[#00738B] font-bold text-xl">
                  Nationality / Nationalité
                </p>

                <h3 className="text-4xl uppercase">
                  {passportData.nationality}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-[#00738B] font-bold text-xl">
                    Date of birth / Date de naissance
                  </p>

                  <h3 className="text-4xl">{passportData.dob}</h3>
                </div>

                <div>
                  <p className="text-[#00738B] font-bold text-xl">
                    Sex / Sexe
                  </p>

                  <h3 className="text-4xl">{passportData.sex}</h3>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-[#00738B] font-bold text-xl">
                    Date of issue / Date de délivrance
                  </p>

                  <h3 className="text-4xl">{passportData.issueDate}</h3>
                </div>

                <div>
                  <p className="text-[#00738B] font-bold text-xl">
                    Date of expiry / Date d'expiration
                  </p>

                  <h3 className="text-4xl">{passportData.expiryDate}</h3>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-[#00738B] font-bold text-xl">
                    Authority / Autorité
                  </p>

                  <h3 className="text-4xl uppercase">
                    {passportData.authority}
                  </h3>
                </div>

                <div>
                  <p className="text-[#00738B] font-bold text-xl">
                    Place of birth / Lieu de naissance
                  </p>

                  <h3 className="text-4xl uppercase">
                    {passportData.birthPlace}
                  </h3>
                </div>
              </div>

              {/* Signature */}
              <div className="mt-8">
                <p className="text-[#00738B] font-bold text-xl">
                  Holder's signature / Signature du titulaire
                </p>

                <h3
                  className="text-5xl italic mt-2"
                  style={{ fontFamily: "cursive" }}
                >
                  {passportData.signature}
                </h3>
              </div>
            </div>
          </div>

          {/* MRZ */}
          <div className="absolute bottom-10 left-8 right-8">
            <div className="font-mono text-[42px] tracking-[4px]">
              {passportData.mrz1}
            </div>

            <div className="font-mono text-[42px] tracking-[4px] mt-3">
              {passportData.mrz2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassportDemo;