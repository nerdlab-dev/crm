import { spawnSync } from "node:child_process";

// CRM도 공통 설치기를 사용한다. 연결 이름과 전체 권한 정책을 복제하지 않는다.
export function installMcp({ requestedClient = null, runner = spawnSync } = {}) {
  if (requestedClient !== null && !["codex", "claude"].includes(requestedClient)) {
    return { ok: false, message: "클라이언트는 codex 또는 claude여야 합니다." };
  }

  const result = runner("npx", [
    "-y",
    "@nerdlab-dev/meta-ads-mcp@latest",
    "install",
    ...(requestedClient ? ["--client", requestedClient] : []),
  ], { encoding: "utf8" });

  return {
    ok: result.status === 0,
    message: [result.stdout, result.stderr, result.error?.message]
      .filter(Boolean).join("\n").trim() || `공통 MCP 설치기 종료 코드: ${result.status ?? "알 수 없음"}`,
  };
}
