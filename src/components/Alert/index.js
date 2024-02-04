import Swal from "sweetalert2";

export const cartAddedAlert = () =>
  Swal.fire({
    position: "center",
    icon: "success",
    title: "장바구니에 상품이 담겼습니다.",
    showConfirmButton: false,
    timer: 1500,
    backdrop: false,
  });

export const failedAlert = (message) =>
  Swal.fire({
    position: "center",
    icon: "error",
    title: message,
    showConfirmButton: false,
    timer: 1500,
    backdrop: false,
  });
