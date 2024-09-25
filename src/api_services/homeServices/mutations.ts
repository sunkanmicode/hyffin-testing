import { useMutation, useQueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { createItem } from ".";

// export const useCreateItemMutation = (closeSheet:any) => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: createItem,
//     onSuccess(data: any) {
//       //   console.log(data, "SUCCESSlOGIN");
     
//       closeSheet();
//       Toast.show({
//         type: "success",
//         text2: data?.message,
//       });
//        queryClient.invalidateQueries({ queryKey: ["get-all-item"] });
//     },
//     onError(error: any) {
//       console.log(error);
//       if (error?.response) {
//         Toast.show({
//           type: "error",
//           //   text2: error?.response?.data?.message,
//           text2: error?.response?._tokenResponse?.error?.message,
//         });
//       } else {
//         Toast.show({
//           type: "error",
//           text2: error?.message,
//         });
//       }
//     },
//   });
  
// };

export const useCreateItemMutation = (closeSheet: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createItem,
    onSuccess(data: any) {
      closeSheet();
      Toast.show({
        type: "success",
        text2: data?.message,
      });
    },
    onError(error: any) {
      console.log(error);
      if (error?.response) {
        Toast.show({
          type: "error",
          text2: error?.response?._tokenResponse?.error?.message,
        });
      } else {
        Toast.show({
          type: "error",
          text2: error?.message,
        });
      }
    },
    onSettled: (data, error) => {
      if (!error) {
        queryClient.invalidateQueries({ queryKey: ["get-all-item"] });
      }
    },
  });
};
