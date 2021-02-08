package config

// Path : Database connect path
func Path(DBUser string, DBPass string, DBProt string, DBName string) string {
	connect := DBUser + ":" + DBPass + "@" + DBProt + "/" + DBName + "?charset=utf8&parseTime=True&loc=Local"
	return connect
}
