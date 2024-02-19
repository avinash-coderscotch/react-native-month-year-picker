import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Modalize } from "react-native-modalize";
import moment from "moment";
import { AssetSvg } from "./asset-svg";
import { toNumber } from "lodash";

export const MonthYearPicker = (props) => {
  const bottomSheetRef = useRef(null);
  const [month, setMonth] = useState(props?.month ?? moment().format("MM"));
  const [year, setYear] = useState(props?.year ?? moment().format("YYYY"));
  const closeModal = () => {
    bottomSheetRef.current?.close?.();
  };
  const openModal = async () => bottomSheetRef.current?.open?.();

  useEffect(() => {
    MonthYearPopupService.setModalReference({ closeModal, openModal });
    return () => {};
  }, []);

  const onContinue = async () => {
    props?.setMonth?.(month);
    props?.setYear?.(year);
    closeModal();
  };

  const SHEET_CONTENT = (
    <View style={{ flex: 1 }}>
      <ScrollView bounces={false} style={{ width: "100%" }}>
        <View style={styles.bottomSheetContainer}>
          <View style={styles.rowTitle}>
            <View style={{ width: "10%" }} />
            <Text tx={"dashboard.selectMonthYear"} style={styles.label} />
            <TouchableOpacity
              style={styles.closeContainer}
              onPress={closeModal}
            >
              <AssetSvg width={17} height={17} name={AssetSvg.icons.cross()} />
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", paddingVertical: 15 }}>
            <View
              style={{
                marginBottom: 25,
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                onPress={() => setYear((y) => toNumber(y) - 1)}
                activeOpacity={0.7}
              >
                <AssetSvg name={AssetSvg.icons.left_arrow("#909090")} />
              </TouchableOpacity>
              <Text style={styles.year}>{year}</Text>
              <TouchableOpacity
                onPress={() => setYear((y) => toNumber(y) + 1)}
                activeOpacity={0.7}
              >
                <AssetSvg name={AssetSvg.icons.right_arrow_2("#909090")} />
              </TouchableOpacity>
            </View>
            <View
              style={{ width: "100%", flexDirection: "row", flexWrap: "wrap" }}
            >
              {MONTHS.map((item) => {
                const { label, value } = item;
                const selected = value === month;
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setMonth(value);
                    }}
                    activeOpacity={0.7}
                    style={[
                      styles.monthButton,
                      selected && styles.monthButtonSelected,
                    ]}
                  >
                    <Text
                      text={label}
                      style={[styles.month, selected && styles.monthSelected]}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <TouchableOpacity onPress={onContinue}>
            <Text>Apply</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
  return (
    <Modalize
      ref={bottomSheetRef}
      withReactModal
      avoidKeyboardLikeIOS
      withHandle
      adjustToContentHeight
      scrollViewProps={{ scrollEnabled: false }}
      overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      reactModalProps={{ statusBarTranslucent: true }}
      closeOnOverlayTap
      handlePosition="outside"
    >
      {SHEET_CONTENT}
    </Modalize>
  );
};

export default MonthYearPicker;
const styles = StyleSheet.create({
  closeContainer: { flex: 1, alignItems: "flex-end" },
  rowTitle: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
    textAlign: "center",
    width: "80%",
  },
  year: {
    fontSize: 16,
    color: "#21ACAD",
    textAlign: "center",
  },
  monthButton: {
    width: "32%",
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  monthButtonSelected: {
    backgroundColor: "#21ACAD",
  },
  month: {
    color: "black",
    textAlign: "center",
  },
  monthSelected: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },

  bottomSheetContainer: {
    flex: 1,
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    paddingTop: 20,
    paddingBottom: 50,
  },
});

class Service {
  modalApply: any;
  constructor() {
    this.modalApply = null;
  }
  setModalReference = (ref: any) => (this.modalApply = ref);
  openModal = (item, actions) => this.modalApply?.openModal(item, actions);
  closeModal = () => this.modalApply?.closeModal();
}

export const MonthYearPopupService = new Service();

export const MONTHS = [
  { label: "January", value: "01" },
  { label: "February", value: "02" },
  { label: "March", value: "03" },
  { label: "April", value: "04" },
  { label: "May", value: "05" },
  { label: "June", value: "06" },
  { label: "July", value: "07" },
  { label: "August", value: "08" },
  { label: "September", value: "09" },
  { label: "October", value: "10" },
  { label: "November", value: "11" },
  { label: "December", value: "12" },
];
