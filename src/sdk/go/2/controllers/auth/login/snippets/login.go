_, err := kuzzle.Auth.Login("local", json.RawMessage("{\"username\":\"foo\",\"password\":\"bar\"}"), nil)

if err != nil {
  log.Fatal(err)
} else {
  fmt.Printf("Success")
}
