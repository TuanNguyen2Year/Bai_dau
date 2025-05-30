"use client";

import { useState } from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import { FaImage } from "react-icons/fa6";
import { HiOutlineTranslate } from "react-icons/hi";
import { MdOutlineWeb } from "react-icons/md";
import { MdNoteAdd } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import { FaExchangeAlt } from "react-icons/fa";
import OptionButton from "./components/OptionButton";
import LanguageOption from "./components/LanguageOption";
import { FaHistory } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
export default function Home() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [timer, setTimer] = useState(null);
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputText(value);

    setTranslatedText("Đang dịch...");

    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      // Gỉa lập bản dịch: bạn có thể gọi API thật ở đây
      setTranslatedText(` ${value}`);
    }, 2000);

    setTimer(newTimer);
  };

  const [isHovered, setIsHovered] = useState(false);
  const [sourceLang, setSourceLang] = useState("Phát hiện ngôn ngữ");
  const [targetLang, setTargetLang] = useState("Việt");
  const [showSourceLangs, setShowSourceLangs] = useState(true);
  const sourceLangs = ["Phát hiện ngôn ngữ", "Anh", "Việt", "Pháp"];
  const targetLangs = ["Anh", "Việt", "Pháp"];
  // ham de xu ly ngon ngu nguon
  const handleSourceLangClick = (lang) => {
    setSourceLang(lang);

    if (lang === targetLang) {
      const newTarget = targetLangs.find((l) => l !== lang);
      if (newTarget) setTargetLang(newTarget);
    }
  };

  const handleTargetLangClick = (lang) => {
    setTargetLang(lang);

    if (lang === sourceLang && sourceLang !== "Phát hiện ngôn ngữ") {
      const newSource = sourceLangs.find(
        (l) => l !== lang && l !== "Phát hiện ngôn ngữ"
      );
      if (newSource) setSourceLang(newSource);
    }
  };
  //ham de doi qua lai
  const handleSwapLanguages = () => {
    if (sourceLang === "Phát hiện ngôn ngữ") return;

    const newSource = targetLang;
    const newTarget = sourceLang;

    if (newSource === newTarget) return;

    setSourceLang(newSource);
    setTargetLang(newTarget);
  };

  const boxStyle = {
    border: "2px solid lightgray",
    borderRadius: "5px",
    width: "140px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "10px",
    cursor: "pointer",
    gap: "10px",
    backgroundColor: isHovered ? "lightblue" : "white",
    transition: "background-color 0.5s",
  };
  const logo = "img/logo_translate.png";
  const [selected, setSelected] = useState("text");

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <header
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "60px",

          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid RGB(224, 224, 224)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "30px",
            cursor: "pointer",
            gap: "10px",
          }}
        >
          <IoReorderThreeSharp
            style={{
              fontSize: "24px",
              color: "#343a40",
              cursor: "pointer",
              width: "70%",
              height: "70%",
            }}
          />
          <img
            src={logo}
            alt="google translate"
            style={{ width: "80%", height: "80%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginRight: "30px",
            cursor: "pointer",
            gap: "10px",
          }}
        >
          <IoMdSettings
            style={{
              fontSize: "24px",
              color: "#343a40",
              cursor: "pointer",
              marginRight: "10px",
              width: "50%",
              height: "50%",
            }}
          />
          <TbGridDots
            style={{
              fontSize: "24px",
              color: "#343a40",
              cursor: "pointer",
              marginRight: "10px",
              width: "50%",
              height: "50%",
            }}
          />
          <RxAvatar
            style={{
              fontSize: "24px",
              color: "#343a40",
              cursor: "pointer",
              width: "50%",
              height: "50%",
            }}
          />
        </div>
      </header>
      <main
        style={{
          width: "90%",
          marginTop: "-190px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
            marginTop: "5px",

            width: "70%",
            marginLeft: "15px",
          }}
        >
          <OptionButton
            icon={<HiOutlineTranslate />}
            label="Văn bản"
            isSelected={selected === "text"}
            onClick={() => setSelected("text")}
          />
          <OptionButton
            icon={<FaImage />}
            label="Hình ảnh"
            isSelected={selected === "image"}
            onClick={() => setSelected("image")}
          />
          <OptionButton
            icon={<MdNoteAdd />}
            label="Tài liệu"
            isSelected={selected === "doc"}
            onClick={() => setSelected("doc")}
          />
          <OptionButton
            icon={<MdOutlineWeb />}
            label="Trang Web"
            isSelected={selected === "web"}
            onClick={() => setSelected("web")}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "40px",
            marginTop: "10px",
            fontSize: "18px",
            color: "black",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
              padding: "10px",
            }}
          >
            {/* Header chọn ngôn ngữ */}

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                alignItems: "center",
                padding: "10px",
                justifyContent: "center",
                width: "100%",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              {/* Source Language */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "49%",
                  gap: "10px",
                }}
              >
                {sourceLangs.map((lang) => (
                  <LanguageOption
                    key={lang}
                    label={lang}
                    isSelected={
                      sourceLang === "Phát hiện ngôn ngữ"
                        ? lang === "Phát hiện ngôn ngữ"
                        : sourceLang === lang
                    }
                    onClick={() => handleSourceLangClick(lang)}
                  />
                ))}

                <div>
                  <SlArrowDown />
                </div>
              </div>

              {/* Target Language */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "51%",
                  gap: "10px",
                }}
              >
                <FaExchangeAlt
                  style={{ cursor: "pointer" }}
                  onClick={handleSwapLanguages}
                />
                {targetLangs.map((lang) => (
                  <LanguageOption
                    key={lang}
                    label={lang}
                    isSelected={targetLang === lang}
                    onClick={() => handleTargetLangClick(lang)}
                  />
                ))}

                <div>
                  <SlArrowDown />
                </div>
              </div>
            </div>

            {/* Text Areas */}
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                alignItems: "center",
                padding: "10px",
                justifyContent: "space-between",
                marginTop: "-20px",
              }}
            >
              <div style={{ position: "relative", width: "50%" }}>
                <textarea
                  value={inputText}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    height: "200px",
                    maxHeight: "300px",
                    resize: "none",
                    border: "1px solid lightgray",
                    borderRadius: "5px",
                    outline: "none",
                    cursor: "text",
                    marginLeft: "-5px",
                    paddingLeft: "20px",
                    paddingTop: "20px",
                  }}
                  placeholder="Nhập văn bản cần dịch tại đây..."
                ></textarea>

                <div
                  style={{
                    position: "absolute",
                    top: "90%",
                    left: "8px",

                    transform: "translateY(-70%)",
                    pointerEvents: "none",
                    color: "gray",
                    fontSize: "18px",
                    userSelect: "none",
                    display: "flex",
                    flexDirection: "row ",
                    width: "95%",
                    justifyContent: "space-between",
                  }}
                >
                  <FaMicrophone />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row ",
                      gap: "5px",
                    }}
                  >
                    0 / 5.000
                    <div> E</div>
                    <FaSortDown />
                  </div>
                </div>
              </div>

              <div style={{ position: "relative", width: "48%" }}>
                <textarea
                  readOnly
                  disabled
                  value={translatedText}
                  style={{
                    width: "100%",
                    height: "200px",
                    maxHeight: "300px",
                    border: "1px solid lightgray",
                    borderRadius: "5px",
                    resize: "none",
                    backgroundColor: "RGB(239, 239, 239)",
                    cursor: "not-allowed",
                    marginLeft: "-20px",
                    paddingLeft: "20px",
                    paddingTop: "20px",
                  }}
                  placeholder="Bản dịch ..."
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "250px",
          backgroundColor: "#f8f9fa",
          display: "flex",
          justifyContent: "center",
          gap: "100px",
          alignItems: "center",
          backgroundColor: "RGB(255, 255, 255)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              border: "3px solid RGB(233, 233, 233)",
              borderRadius: "50%",
              width: "70px",
              height: "70px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaHistory
              style={{ fontSize: "30px", color: "RGB(117, 117, 117)" }}
            />
          </div>

          <span style={{ fontSize: "16px", color: "#343a40" }}>
            Các bản đã dịch
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              border: "3px solid RGB(233, 233, 233)",
              borderRadius: "50%",
              width: "70px",
              height: "70px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IoMdStar
              style={{ fontSize: "50px", color: "RGB(117, 117, 117)" }}
            />
          </div>

          <span style={{ fontSize: "16px", color: "#343a40" }}>Đã lưu</span>
        </div>
      </div>
    </div>
  );
}
