import {
  Document,
  Page,
  Text,
  View,
  Image,
} from "@react-pdf/renderer";

import styles from "./passportStyles";

const PassportPDF = ({ data }) => {
  return (
    <Document>
      <Page size={[1000, 700]} style={styles.page}>
        <View style={styles.passportBox}>
          {/* TOP */}
          <View style={styles.topRow}>
            <Text style={styles.title}>
              TITRE DE VOYAGE
            </Text>

            <Text style={styles.country}>
              {data.country}
            </Text>

            <View style={styles.documentBox}>
              <Text style={styles.documentTitle}>
                DOCUMENT NO.
              </Text>

              <Text style={styles.documentNumber}>
                {data.documentNo}
              </Text>
            </View>
          </View>

          {/* BODY */}
          <View style={styles.body}>
            {/* PHOTO */}
            <View style={styles.photoBox}>
              <Image
                src={data.photo}
                style={styles.photo}
              />
            </View>

            {/* INFO */}
            <View style={styles.info}>
              <View style={styles.row}>
                <View style={styles.field}>
                  <Text style={styles.label}>
                    Type
                  </Text>

                  <Text style={styles.value}>
                    {data.type}
                  </Text>
                </View>

                <View style={styles.field}>
                  <Text style={styles.label}>
                    Issuing Code
                  </Text>

                  <Text style={styles.value}>
                    {data.issuingCode}
                  </Text>
                </View>
              </View>

              <View style={styles.field}>
                <Text style={styles.label}>
                  Surname
                </Text>

                <Text style={styles.bigValue}>
                  {data.surname}
                </Text>
              </View>

              <View style={styles.field}>
                <Text style={styles.bigValue}>
                  {data.givenName}
                </Text>
              </View>

              <View style={styles.field}>
                <Text style={styles.label}>
                  Nationality
                </Text>

                <Text style={styles.value}>
                  {data.nationality}
                </Text>
              </View>

              <View style={styles.row}>
                <View style={styles.field}>
                  <Text style={styles.label}>
                    Date of Birth
                  </Text>

                  <Text style={styles.value}>
                    {data.dob}
                  </Text>
                </View>

                <View style={styles.field}>
                  <Text style={styles.label}>
                    Sex
                  </Text>

                  <Text style={styles.value}>
                    {data.sex}
                  </Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.field}>
                  <Text style={styles.label}>
                    Issue Date
                  </Text>

                  <Text style={styles.value}>
                    {data.issueDate}
                  </Text>
                </View>

                <View style={styles.field}>
                  <Text style={styles.label}>
                    Expiry Date
                  </Text>

                  <Text style={styles.value}>
                    {data.expiryDate}
                  </Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.field}>
                  <Text style={styles.label}>
                    Authority
                  </Text>

                  <Text style={styles.value}>
                    {data.authority}
                  </Text>
                </View>

                <View style={styles.field}>
                  <Text style={styles.label}>
                    Birth Place
                  </Text>

                  <Text style={styles.value}>
                    {data.birthPlace}
                  </Text>
                </View>
              </View>

              <View style={styles.field}>
                <Text style={styles.label}>
                  Signature
                </Text>

                <Text style={styles.signature}>
                  {data.signature}
                </Text>
              </View>
            </View>
          </View>

          {/* MRZ */}
          <View style={styles.mrzContainer}>
            <Text style={styles.mrz}>
              {data.mrz1}
            </Text>

            <Text style={styles.mrz}>
              {data.mrz2}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PassportPDF;