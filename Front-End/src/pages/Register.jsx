function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);