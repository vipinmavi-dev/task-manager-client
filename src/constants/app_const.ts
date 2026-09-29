export function NavButton(modalHandler) {
    return [
        {
          buttonText: "+ New Task",
          method: () => {modalHandler({
            status: true
          })},
          className: "getStarted"
        }
    ]
}