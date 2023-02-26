/** API : 사용자 목록 조회 */
export async function getUserList() {
  const res = await fetch(
    "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/users",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        apikey: "FcKdtJs202301",
        username: "KDT4_Team3",
        masterKey: true,
      },
    }
  );
  const json = await res.json();
  return json;
}
